import { nanoid } from "nanoid"
import { useState } from "react"
import Notes from "./Notes"
import AddNote from "./AddNote"
import Searchbar from "./Searchbar"
import Header from "./Header"
const NoteList = () => {
    const [noResult, setNoResults] = useState(false)
    const [search, setSearch] = useState("")
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
        } else {
            alert("Please add note")
        }


    }
    const handleChanges = (e) => {
        setNote(e.target.value);

    }
    const handleSearch = (e) => {
        let value = e.target.value
        setSearch(e.target.value)
        if (value.length > 0) {
            let filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))
            if (filteredNotes.length > 0) {
                setNoResults(false)
            }else{
                setNoResults(true)
            }
        }else{
            setNoResults(false)
        }
        
    }
    const renderNotes = () => {
        let filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))
       
        return filteredNotes.map(note => <Notes key={note.id} note={note} onDelete={()=>handleDelete(note.id)} />)

    }
    return (
        <div className="bg-white dark:bg-black h-screen">
            <div className="container mx-auto px-auto">
                {/* Header */}
                <Header />
                {/* Search bar */}
                <Searchbar onChange={handleSearch} />

                {/* Notes list  */}
                < div className="grid grid-cols-auto-fit gap-4 my-12">
                    {

                        renderNotes()
                    }
                    {/* Add new notes */}
                    {!noResult && <AddNote onAddNote={handleAddNotes} note={note} onChange={handleChanges} />}

                </div>
                {noResult && <div className="text-center">No results found</div>}
            </div>

        </div>



    )

}

export default NoteList