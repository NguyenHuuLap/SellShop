
const initialState ={
    isAuthenticated: false,
    username: '',
}

const userReducer =(state = initialState, action) =>{   
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
            };
            case 'LOGOUT':
                return {
                  ...state,
                  isAuthenticated: false,
                  user: null,
                };
        default:
            return state;
    }

}

export default userReducer;