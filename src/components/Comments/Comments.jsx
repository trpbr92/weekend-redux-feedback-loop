import {useState} from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Comments(){

    const [tempItem, setTempItem] = useState({comments:''});


    const handleComments = (event)=>{
        console.log('in handleComments:', event.target.value);
        setTempItem({...tempItem, comments: event.target.value})
    }

    const handleCommentsNext = ()=>{
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
            <p>{JSON.stringify(tempItem)}</p>

    </>
    )
}

export default Comments;