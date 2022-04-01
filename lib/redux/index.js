import {combineReducers, createStore} from "redux";

function container(state = {}, action) {
    switch(action.type) {
        case 'CHANGE_CONTAINER':
            let copy = state;
            copy.containerRef = action.payload.container;
            return copy;
        default:
            return state;
    }
}

function auth(state = {}, action) {
    switch(action.type) {
        case 'CHANGE_AUTH':
            let copy = state;
            copy.user = action.payload.user
            copy.token = action.payload.token
            console.log(`copy ${copy}`);
            return copy;
        default:
            return state;
    }
}


const reducers = combineReducers({
    container,
    auth,
})

const store = createStore(reducers);

export default store;