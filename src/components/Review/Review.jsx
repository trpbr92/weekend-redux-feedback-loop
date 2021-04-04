import {Link} from 'react-router-dom';

function Review(props){

    function handleReview(){
        console.log('in handleReview');
    }

    return(
    <>
        <h1>Review your feeback</h1>
 
            {JSON.stringify(props)}

            <Link to='/thankyou'>
                <button onClick={handleReview}>SUBMIT</button>
            </Link>
    </>
    )
}

export default Review;