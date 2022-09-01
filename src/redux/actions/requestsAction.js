export function allRequests(request) {
    return { type: 'ALL_REQUESTS', payLoad: request }
}

export function confirmReq(request) {
    //request.status=true
    return { type: 'CONFIRM_REQUEST', payLoad: request }
}
export function deleteReq(request) {
    return { type: 'DELETE_REQUEST', payLoad: request }
}
export function setRequests(request) {
    return { type: 'SET_REQUESTS', payLoad: request }
}
