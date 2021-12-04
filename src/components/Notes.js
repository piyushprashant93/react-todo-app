
import moment from 'moment';
import PropTypes from 'prop-types';
import {AiFillDelete} from 'react-icons/ai'
const Notes = ({note, onDelete}) => {
    return (
        <div className="bg-yellow-200 mb-10 rounded p-4 min-height-170 flex flex-col justify-between  ">
        <span>{note?.text}</span>
        <div className="flex align-middle items-center justify-between">
            <small className="text-green-500">{moment(note?.date).format('MMM Do YY') }</small>
            <AiFillDelete onClick={onDelete} className="text-red-500 cursor-pointer"/>
        </div>
    </div>
    );
}

Notes.prototype={
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default Notes;