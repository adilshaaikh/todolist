import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import TodoReducers from './reducers/TodoReducers'

const reducer=combineReducers({

    //this containers all reducer
    Todo: TodoReducers,
});

const middleware = [thunk];

const initialState={};

const store=createStore(
    reducer,
    initialState,
   composeWithDevTools( applyMiddleware(...middleware))
);

export default store;