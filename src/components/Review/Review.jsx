import {Link} from 'react-router-dom';

function Review(){
    return(
    <>
            <h1>Review your feeback</h1>
 
 
            <Link to='/thankyou'>
                <button>SUBMIT</button>
            </Link>
    </>
    )
}

export default Review;