import store from "../redux";
import {changeUserAuth} from "../redux/actions";

const API_URL = "https://localhost:7203/v1/jeebka";

const GET = () => {
    let state = store.getState().auth;
    let get = {
        method: 'get',
        headers: new Headers({
            'Authorization': state.token,
            'Content-Type': 'application/json'
        })
    };
    return get;
};

const POST = (body) => {
    let state = store.getState().auth;
    let token = state?.token;
    let post = {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: ''
    }
    if (body != null) post.body = JSON.stringify(body);
    if (token != null) post.headers.append('Authorization', 'Bearer' + token);
    return post;
};

export function LogInApi(email, password){
    fetch(API_URL+"/login", POST({name: "", email, password}))
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            store.dispatch(changeUserAuth(data));
            console.log(store.getState());
        })
}

export function GetUserGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/groups/notShared`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}