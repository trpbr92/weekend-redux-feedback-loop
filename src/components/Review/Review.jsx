import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

function Review(){

    const history = useHistory();
    const feedback = useSelector(store=>{
        return store;
    })

    const handleReviewSubmit = ()=>{
        console.log('in handleReviewSubmit', feedback);
        axios.post('/feedback', feedback).then((response)=>{
            console.log('POST response', response);
        }).catch((err)=>{
            console.log(err);
            alert('error in POST', err);
        })


        history.push('/thankyou');
    }

    return(
    <>
    <h1>Review your feeback</h1>
 
        <p>Feeling: {feedback.feeling}</p>
        <p>Support: {feedback.support}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Comments: {feedback.comments}</p>
        <button onClick={handleReviewSubmit}>SUBMIT</button>
    </>
    )
}

export default Review;