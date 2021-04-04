import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Comments(){

    function handleComments(){
        console.log('in handleComments');
    }

    return(
    <>
        <header>
            <Header />
        </header>
            <h1>Any comments you want to leave?</h1>
            <input type="text" placeholder="comments"/>
 
            <Link to='/review'>
                <button onClick={handleComments}>Next</button>
            </Link>
    </>
    )
}

export default Comments;