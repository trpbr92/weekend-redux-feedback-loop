import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Comments(){
    return(
    <>
        <header>
            <Header />
        </header>
            <h1>Any comments you want to leave?</h1>
            <input type="text" placeholder="comments"/>
 
            <Link to='/review'>
                <button>Next</button>
            </Link>
    </>
    )
}

export default Comments;