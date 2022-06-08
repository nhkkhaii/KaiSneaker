import { SET_NAMELOGIN, SET_PASSWORDLOGIN } from '~/constants/loginConstants';

// init state
export const initStateLogin = {
    USERNAME: '',
    PASSWORD: '',
};

export const loginReducer = (state, action) => {
    switch (action.type) {
        case SET_NAMELOGIN:
            return {
                ...state,
                USERNAME: action.payload,
            };
            break;
        case SET_PASSWORDLOGIN:
            return {
                ...state,
                PASSWORD: action.payload,
            };
            break;
        default:
            throw new Error();
    }
};
