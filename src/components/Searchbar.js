
import { AiOutlineSearch } from 'react-icons/ai'
const Searchbar = ({ onChange, onSubmit, value }) => {
    return (
        
            <div className="flex items-center border-2 border-black  rounded-full mt-10 bg-gray-100 p-1">
                <AiOutlineSearch className="text-2xl text-gray-600 mr-2" />
                <input onChange={onChange} placeholder="type to search" className="w-full h-full border-none bg-gray-100 focus:outline-none" />
            </div>

      
    )
}

export default Searchbar