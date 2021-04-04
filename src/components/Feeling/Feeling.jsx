import Header from "../Header/Header";
import {Link} from 'react-router-dom';

function Feeling(){

    function handleFeeling(){
        console.log('handleFeeling');
    }

    function handleFeelingNext(){
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
        </>
    )
}

export default Feeling;