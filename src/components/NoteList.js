import { nanoid } from "nanoid"
import { useState } from "react"
import Notes from "./Notes"
import AddNote from "./AddNote"
import Searchbar from "./Searchbar"
import Header from "./Header"
const NoteList = () => {
    const [searchText, setSearchText] = useState("")
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([])
    const handleDelete = (id) => {
        
        let newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)

    }
    const handleAddNotes = () => {
        if (note) {
            setNotes([...notes, { id: nanoid(), text: note, date: new Date().toISOString() }])
            setNote('')
        }else{
            alert("Please add note")
        }

     
    }
    const handleChanges = (e) => {
        setNote(e.target.value);

    }
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div className="bg-white dark:bg-black h-screen">
             <div className="container mx-auto px-auto">
           {/* Header */}
             <Header/>
            {/* Search bar */}
            <Searchbar onChange={handleSearch}/>

            {/* Notes list  */}
           < div className="grid grid-cols-auto-fit gap-4 my-12">
            {
                notes.filter(note=>note.text?.toLowerCase().includes(searchText)).map((note, index) => (
                    <Notes key={index} note={note} onDelete={() => handleDelete(note.id)} />
                ))
            }
            {/* Add new notes */}
            <AddNote onAddNote={handleAddNotes} note={note} onChange={handleChanges} />
          
        </div>
        </div>

        </div>
       
       

    )

}

export default NoteList