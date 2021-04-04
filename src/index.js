import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedback = (state = {}, action)=>{
    if (action.type === 'feeling'){
        state = {...state, feeling: action.payload};
    }
    if (action.type === 'understanding'){
        state = {...state, understanding: action.payload};
    }
    if (action.type === 'support'){
        state = {...state, support: action.payload};
    }
    if (action.type === 'comments'){
        state = {...state, comments: action.payload};
    }
    if (action.type === 'clear'){
        state = {};
    }
    return state;
};




const store = createStore(
    combineReducers({
        feedback: feedback,
       
    })
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();