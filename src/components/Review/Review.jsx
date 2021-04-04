import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Review(props){
    const reviewDisplay = useSelector(store=>{
        return store.feedback;
    })

    const handleReviewSubmit = ()=>{
        console.log('in handleReviewSubmit');
    }

    return(
    <>
        <h1>Review your feeback</h1>
 
           <p>{reviewDisplay.feeling}</p>

            <Link to='/thankyou'>
                <button onClick={handleReviewSubmit}>SUBMIT</button>
            </Link>
    </>
    )
}

export default Review;