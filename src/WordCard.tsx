import Definition from './Definition';

const WordCard = ({results}) => {
    if(!results){
        return <p className='text-gray-500'>No words searched yet.</p>;
    }

    const wordData = results[0]; //selects the first/only object in the returned array

    return(
        <>
            <div className='bg-gray-100 p-10'>
                <h1 className='font-bold text-xl mb-2'>{wordData.word}</h1>
                {wordData.phonetic && (
                    <p className='mb-4'>{wordData.phonetic}</p>
                )}
                {/*Figure out how to include an audio button - Figured out with ChatGPT - still asked it to explain*/}
                {wordData.phonetics?.find((p:any)=> p.audio) && (
                    <audio controls src={wordData.phonetics.find((p:any)=>p.audio).audio}
                    className='mb-4'
                    />
                )}
                {/* Here's my understanding of the above audio feature - wordData is the API response data, it checks if there is 'phonetics' as apart of the object
                if yes, then it looks at the first part of the phonetics objects, and then from it, it looks for 'audio', it available, it displays that. 'control' is the pause/play and etc. feature */}
                {wordData.origin && (
                    <div>
                        <h2 className='text-lg font-medium mb-1'>Origin of the word</h2>
                        <p>{wordData.origin}</p>
                    </div>
                )}
                
                <h2 className='text-lg font-medium mt-4 mb-1'>Definition(s)</h2>
                <Definition meanings={wordData.meanings}/>
            </div>
        </>
    );
}

export default WordCard