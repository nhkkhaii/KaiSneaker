import { SET_NAMELOGIN, SET_PASSWORDLOGIN } from '~/constants/loginConstants';

export const setNameLogin = (payload) => {
    return {
        type: SET_NAMELOGIN,
        payload,
    };
};

export const setPasswordLogin = (payload) => {
    return {
        type: SET_PASSWORDLOGIN,
        payload,
    };
};
