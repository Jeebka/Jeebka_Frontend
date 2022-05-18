import store from "../redux";
import {changeUserAuth} from "../redux/actions";

const API_URL = "https://jeebka-backend.azurewebsites.net/v1/jeebka";

const GET = () => {
    let state = store.getState().auth;
    let get = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    };
    return get;
};

const DELETE = () => {
    let state = store.getState().auth;
    let del = {
        method: 'delete',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    };
    return del;
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
            store.dispatch(changeUserAuth(data));
        })
}

export function GetUserGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/groups/members/notShared`, GET())
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        });
}

export function GetUserGroup(name, callback){
    let email = store.getState().auth.user;
    console.log("Testing", name)
    fetch(API_URL+`/users/${email}/groups/${name}`, GET())
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        });
}

export function GetUserSharedGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/groups/members/shared`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}

export function GetUserSuggestedGroups(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/query/matchingPublicGroups`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}

export function CreateGroup(group, callback){
    let email = store.getState().auth.user;
    console.log(`Creating group for mail: ${email}`);
    console.log(group);
    fetch( API_URL+`/users/${email}/groups`, POST(group))
        .then(callback)
}

export function CreateLink(link, groupName, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups/${groupName}/tagLinks`, POST(link)).then(callback)
}

export function DeleteLink(linkId, callback){
    fetch( API_URL+`/users/email/groups/name/links/${linkId}`, DELETE()).then(callback)
}

export function DeleteGroup(groupName, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups/${groupName}`, DELETE()).then(callback)
}

export function AddTagToLink(groupName,linkName,tagName, callback){
    let email = store.getState().auth.user;
    fetch( API_URL+`/users/${email}/groups/${groupName}/links/${linkName}/tags/${tagName}`, PUT())
        .then(callback)
}

export function GetUserTags(callback){
    let email = store.getState().auth.user;
    fetch(API_URL+`/users/${email}/query/tags`, GET())
        .then((res) => res.json())
        .then((data) => { callback(data);});
}