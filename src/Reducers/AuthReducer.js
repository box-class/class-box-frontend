import {
    SET_LOGGEDIN_STATUS
} from '../Actions/AuthActions';

const initialState = {
    loggedIn: false,
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGGEDIN_STATUS:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return { ...state }
    }
}

export default AuthReducer