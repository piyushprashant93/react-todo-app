import PropTypes from 'prop-types';


const AddNote = ({note, onChange, onAddNote }) => {
    return (
        <div className="bg-green-400 mb-10 rounded p-4 min-height-170 flex flex-col justify-between max-w-xs">
            <textarea
                rows="8"
                cols="10"
                className="w-full border-none resize-none bg-green-400 focus:outline-none placeholder-white"
                placeholder="Add a note..."
                onChange={onChange}
                value={note}
            />
            <div className="flex align-middle  items-center justify-between mt-8">
                <small>Total word: {note.length}</small>
                <button onClick={onAddNote} className=" bg-white  border-none rounded-full py-1 px-4  shadow-md hover:shadow-none focus:ring-2 focus:outline-none focus:ring-white focus:ring-opacity-50 ">Save</button>

            </div>

        </div>
    );
}

AddNote.propTypes = {
    note: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onAddNote: PropTypes.func.isRequired
    
}
export default AddNote;