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

const reducers = combineReducers({
    container,
})

const store = createStore(reducers);

export default store;