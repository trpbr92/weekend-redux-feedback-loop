import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Understanding(){
    return(
        <>
    <header>
        <Header />
    </header>
        <h1>How well are you understanding the content?</h1>
        <label for="understanding">Feeling? (0-5) </label>
        <input type="number" id="understanding" name="understanding"
        min="0" max="5"/>
 
 <Link to='/supported'>
    <button>Next</button>
    </Link>
        </>
    )
}

export default Understanding;