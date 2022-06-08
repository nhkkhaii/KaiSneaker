import { SET_NAMEREGISTER, SET_PASSWORDREGISTER, SET_REPASSWORDREGISTER } from '~/constants/registerConstants';

// init state
export const initStateRegister = {
    USERNAME: '',
    PASSWORD: '',
    REPASSWORD: '',
};

export const registerReducer = (state, action) => {
    switch (action.type) {
        case SET_NAMEREGISTER:
            return {
                ...state,
                USERNAME: action.payload,
            };
            break;
        case SET_PASSWORDREGISTER:
            return {
                ...state,
                PASSWORD: action.payload,
            };
            break;
        case SET_REPASSWORDREGISTER:
            return {
                ...state,
                REPASSWORD: action.payload,
            };
            break;
        default:
            throw new Error();
    }
};
