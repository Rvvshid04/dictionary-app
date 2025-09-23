
const Definition = ({meanings}) => {
    if(!meanings || meanings.length === 0){
        return <p>No definitions available</p>;
    }

    return(
        // this part I got GPT help. To effectively use the map function. It also gave pretty good styling, so I went along with it. 
        <div>
        {meanings.map((meaning, idx) => (
            <div key={idx} className="mb-3">
                <h3 className="font-semibold italic">{meaning.partOfSpeech}</h3>
                <ul className="list-disc ml-6">
                    {meaning.definitions.map((def, i)=>(
                        <li key={i}>
                            {def.definition}
                            {def.example && <p className="text-gray-500">e.g. {def.example}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    );
}

export default Definition