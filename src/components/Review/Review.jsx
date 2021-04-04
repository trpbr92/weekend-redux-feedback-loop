import {useState} from 'react';
import {Link} from 'react-router-dom';

function Review(props){

    const handleReviewSubmit = ()=>{
        console.log('in handleReviewSubmit');
    }

    return(
    <>
        <h1>Review your feeback</h1>
 
            {JSON.stringify(props)}

            <Link to='/thankyou'>
                <button onClick={handleReviewSubmit}>SUBMIT</button>
            </Link>
    </>
    )
}

export default Review;