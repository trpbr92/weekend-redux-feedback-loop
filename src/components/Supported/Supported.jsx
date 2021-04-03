import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Supported(){
    return(
    <>
        <header>
            <Header />
        </header>
            <h1>How well are you being supported?</h1>
                <label for="supported">Feeling? (0-5) </label>
                <input type="number" id="supported" name="supported"
                min="0" max="5"/>
 
            <Link to='/comments'>
                <button>Next</button>
            </Link>
    </>
    )
}

export default Supported;