import store from "../redux";
import {changeUserAuth} from "../redux/actions";

const API_URL = "https://localhost:7203/v1/jeebka";

const GET = () => {
    let state = store.getState().auth;
    let get = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    };
    console.log(get);
    return get;
};

const POST = (body) => {
    let state = store.getState().auth;
    let token = state?.token;
    let post = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ''
    }
    if (body != null) post.body = JSON.stringify(body);
    if (token != null) post.headers.Autorization = `Bearer ${token}`;
    console.log(post);
    return post;
};

const PUT = (body) => {
    let state = store.getState().auth;
    let token = state?.token;
    let put = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ''
    }
    if (body != null) put.body = JSON.stringify(body);
    if (token != null) put.headers.Autorization = `Bearer ${token}`;
    return put;
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

export function GetUserSharedGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/groups/shared`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}

export function GetUserSuggestedGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/publics`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}

export function GetUserGroupLinks(groupName, callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/groups/${groupName}`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}

export function CreateGroup(group, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups`, POST(group))
        .then(callback)
}

export function CreateLink(link, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups`, POST(link))
        .then(callback)
}

export function AddTagToLink(groupName,linkName,tagName, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups/${groupName}/links/${linkName}/tags/${tagName}`, PUT())
        .then(callback)
}