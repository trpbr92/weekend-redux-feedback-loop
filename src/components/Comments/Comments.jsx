import {useState} from 'react';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments(){
    const  dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');


    const handleComments = (event)=>{
        console.log('in handleComments:', event.target.value);
        setComments(event.target.value);
    }

    const handleCommentsNext = ()=>{
        console.log('in handleCommentsNext', comments);
        dispatch({type: 'handleCommentsNext', payload: comments})
        history.push('/review');
    }

    return(
    <>
        <header>
            <Header />
        </header>
            <h1>Any comments you want to leave?</h1>
            <input type="text" placeholder="comments" onChange={handleComments}/>
 
                <button onClick={handleCommentsNext}>Next</button>

    </>
    )
}

export default Comments;