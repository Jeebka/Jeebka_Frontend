export function changeContainer(containerRef) {
    return {
        type: 'CHANGE_CONTAINER',
        payload: {
            container: containerRef
        }
    };
}

export function changeUserAuth(auth) {
    return {
        type: 'CHANGE_AUTH',
        payload: {
            user: auth.email,
            token: auth.token
        }
    };
}