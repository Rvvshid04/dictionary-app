import {useState} from "react"

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const searchWord = async () => {
        if (query.trim() === "") return;

        try{
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query.trim()}`);
            const data = await res.json();
            onSearch(data);  
        }catch(error){
            console.log("There is an Error: ", error)
        }
    };
    return(
        <>
            <form onSubmit={(e)=>{e.preventDefault(); searchWord();}} action="" className="w-full bg-blue-200 px-5 py-2">
                <label htmlFor="search-label" className="mr-4"> Search: </label>
                <input type="search" name="searchBar" id="searchBar" placeholder='Search Word' className="max-w-sm mr-5 bg-white rounded-full p-2 focus:border-blue-500 focus:outline-blue-500" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">Search</button>
            </form>
        </>
    );
}

export default SearchBar