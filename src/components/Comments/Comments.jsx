import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Comments(){

    function handleComments(){
        console.log('in handleComments');
    }

    function handleCommentsNext(){
        console.log('in handleCommentsNext');
    }

    return(
    <>
        <header>
            <Header />
        </header>
            <h1>Any comments you want to leave?</h1>
            <input type="text" placeholder="comments" onChange={handleComments}/>
 
            <Link to='/review'>
                <button onClick={handleCommentsNext}>Next</button>
            </Link>
    </>
    )
}

export default Comments;