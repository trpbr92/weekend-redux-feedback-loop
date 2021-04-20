import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import ReviewHeader from '../ReviewHeader/ReviewHeader';

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
        <ReviewHeader />
        <h3>Feeling: {feedback.feeling}</h3>
        <h3>Support: {feedback.support}</h3>
        <h3>Understanding: {feedback.understanding}</h3>
        <h3>Comments: {feedback.comments}</h3>
        <button onClick={handleReviewSubmit}>SUBMIT</button>
    </>
    )
}

export default Review;