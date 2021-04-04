import {useState} from 'react';
import Header from "../Header/Header";
import {Link} from 'react-router-dom';

function Feeling(){

    const [tempItem, setTempItem] = useState({feeling:''});

    const handleFeeling = (event)=>{
        console.log('handleFeeling:', event.target.value);
        setTempItem({...tempItem, feeling: event.target.value})
    }

    const handleFeelingNext = ()=>{
        console.log('in handleFeelingNext');
    }

    return(
        <>
    <header>
        <Header />
    </header>
        <h1>How are you feeling today?</h1>
        <label for="feeling">Feeling? (0-5) </label>
        <input type="number" id="feeling" name="feeling" onChange={handleFeeling}
        min="0" max="5"/>
    
    <Link to='/understanding'>
    <button onClick={handleFeelingNext}>Next</button>
    </Link>
    <p>{JSON.stringify(tempItem)}</p>
        </>
    )
}

export default Feeling;