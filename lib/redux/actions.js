export function changeContainer(containerRef) {
    return {
        type: 'CHANGE_CONTAINER',
        payload: {
            container: containerRef
        }
    };
}