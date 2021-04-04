import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Supported(){

    function handleSupported(){
        console.log('in handleSupported');
    }
    
    function handleSupportedNext(){
        console.log('in handleSupportedNext');
    }

    return(
    <>
        <header>
            <Header />
        </header>
            <h1>How well are you being supported?</h1>
                <label for="supported">Feeling? (0-5) </label>
                <input type="number" id="supported" name="supported" onChange={handleSupported}
                min="0" max="5"/>
 
            <Link to='/comments'>
                <button onClick={handleSupportedNext}>Next</button>
            </Link>
    </>
    )
}

export default Supported;