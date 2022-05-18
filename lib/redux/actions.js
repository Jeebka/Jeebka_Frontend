export function changeContainer(containerRef) {
    return {
        type: 'CHANGE_CONTAINER',
        payload: {
            container: containerRef
        }
    };
}

export function changeUserAuth(auth) {
    console.log(auth);
    return {
        type: 'CHANGE_AUTH',
        payload: {
            user: auth.email,
            token: auth.token
        }
    };
}

export function changeAddOptions(options) {
    return {
        type: 'CHANGE_ADD_OPTIONS',
        payload: {
            tags: options.tags,
            groups: options.groups
        }
    };
}
