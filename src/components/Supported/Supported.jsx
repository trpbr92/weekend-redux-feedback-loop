import {useState} from 'react';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';

function Supported(){

    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('1');


    const handleSupported = (event)=>{
        console.log('in handleSupported:', event.target.value);
        setSupport(event.target.value);
    }
    
    const handleSupportedNext = ()=>{
        console.log('in handleSupportedNext', support);
        dispatch({type: 'handleSupportedNext', payload: support});
        history.push('/comments');
    }

    return(
    <>
        <header>
            <Header />
        </header>
            <h1>How well are you being supported?</h1>
                <label for="supported">Support? (0-5) </label>
                <input type="number" id="supported" name="supported" onChange={handleSupported}
                min="0" max="5"/>
 
                <button onClick={handleSupportedNext}>Next</button>
    </>
    )
}

export default Supported;