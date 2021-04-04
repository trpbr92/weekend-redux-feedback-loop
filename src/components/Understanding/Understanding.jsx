import {useState} from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Understanding(){

    const [tempItem, setTempItem] = useState({understanding:''});


    const handleUnderstanding = (event)=>{
        console.log('in handleUnderstanding:', event.target.value);
        setTempItem({...tempItem, understanding: event.target.value})
    }
    
    const handleUnderstandingNext = ()=>{
        console.log('in handleUnderstandingNext');
    }

    return(
        <>
    <header>
        <Header />
    </header>
        <h1>How well are you understanding the content?</h1>
        <label for="understanding">Understanding? (0-5) </label>
        <input type="number" id="understanding" name="understanding" onChange={handleUnderstanding}
        min="0" max="5"/>
 
 <Link to='/supported'>
    <button onClick={handleUnderstandingNext}>Next</button>
    </Link>
    <p>{JSON.stringify(tempItem)}</p>

        </>
    )
}

export default Understanding;