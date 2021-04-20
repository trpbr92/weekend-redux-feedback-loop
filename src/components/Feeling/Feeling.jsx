import {useState} from 'react';
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Feeling(){

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const history = useHistory();

    const handleFeeling = (event)=>{
        console.log('handleFeeling:', event.target.value);
        setFeeling(event.target.value)
    }

    const handleFeelingNext = ()=>{
        console.log('in handleFeelingNext', feeling);
        dispatch({type: 'handleFeelingNext', payload: feeling});
        history.push('/understanding');
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
    
    <button onClick={handleFeelingNext}>Next</button>
    </>
    )
}

export default Feeling;