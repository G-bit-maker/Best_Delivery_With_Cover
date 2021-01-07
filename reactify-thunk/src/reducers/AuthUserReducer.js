/**
 * Auth User Reducers
 */
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, loading: true,signinerror:"" };

        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload,signinerror:"" };

        case LOGIN_USER_FAILURE:
            return { ...state, loading: false,signinerror:action.error };

        case LOGOUT_USER:
            return { ...state, user: null };

        case SIGNUP_USER:
            return { ...state, loading: true,signuperror:"" };

        case SIGNUP_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload,signuperror:"" };

        case SIGNUP_USER_FAILURE:
            return { ...state, loading: false,signuperror:action.error };

        default: return { ...state };
    }
}
