import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

let feeling = ( state= 1, action )=>{
    console.log( 'in feelingInfo reducer' , action );
    if( action.type === 'handleFeelingNext'){
        state = action.payload;
    }
    return state;
}

let understanding = ( state= 1, action )=>{
    console.log( 'in understandingInfo reducer', action );
    if( action.type === 'handleUnderstandingNext'){
        state=action.payload;
    }
    return state;
}

let support = ( state= 1 , action )=>{
    console.log( 'in supportInfo reducer', action );
    if( action.type === 'handleSupportedNext'){
        state = action.payload;
    }
    return state;
}

let comments = (state= '', action )=>{
    console.log( 'in commentsInfo reducer' , action );
    if( action.type === 'handleCommentsNext'){
        state = action.payload;
    }
    return state;
}
const store = createStore(
    combineReducers(
        {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        },
    )
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
