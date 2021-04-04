import {Link} from 'react-router-dom';

function Review(props){
    return(
    <>
        <h1>Review your feeback</h1>
 
            {JSON.stringify(props)}

            <Link to='/thankyou'>
                <button>SUBMIT</button>
            </Link>
    </>
    )
}

export default Review;