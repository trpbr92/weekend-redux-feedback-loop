import {useState} from 'react';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understanding(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');


    const handleUnderstanding = (event)=>{
        console.log('in handleUnderstanding:', event.target.value);
        setUnderstanding(event.target.value);
    }
    
    const handleUnderstandingNext = ()=>{
        console.log('in handleUnderstandingNext', understanding);
        dispatch({type: 'handleUnderstandingNext', payload: understanding})
        history.push('/supported');
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
 
    <button onClick={handleUnderstandingNext}>Next</button>

     </>
    )
}

export default Understanding;