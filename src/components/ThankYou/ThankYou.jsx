import {useHistory} from 'react-router-dom';

function ThankYou(){

    let history = useHistory();

    const backToFeeling = ()=>{
        history.push('/');
    }
    
    return(
    <>
    <h1>Thank You!</h1>
    <button onClick={backToFeeling}>Leave New Feedback</button>
    </>
    )
}

export default ThankYou;