// export function updateClass(newClass) {
//     return { type: 'UPDATE_CLASS', payLoad: newClass }
// }

export function createUser(newUser) {
    return { type: 'CREATE_USER', payLoad: newUser }
}

export function updateUser(user) {
    return { type: 'UPDATE_USER', payLoad: user }
}
export function deleteUser(user) {
    return { type: 'DELETE_USER', payLoad: user }
}