export const loginSuccess = (username) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        username,
    },
})