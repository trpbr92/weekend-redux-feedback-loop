import Header from "../Header/Header";
import {Link} from 'react-router-dom';

function Feeling(){

    function handleFeeling(){
        console.log('in handleFeeling');
    }

    return(
        <>
    <header>
        <Header />
    </header>
        <h1>How are you feeling today?</h1>
        <label for="feeling">Feeling? (0-5) </label>
        <input type="number" id="feeling" name="feeling"
        min="0" max="5"/>
    
    <Link to='/understanding'>
    <button onClick={handleFeeling}>Next</button>
    </Link>
        </>
    )
}

export default Feeling;