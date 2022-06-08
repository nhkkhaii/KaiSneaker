import { SET_NAMEREGISTER, SET_PASSWORDREGISTER, SET_REPASSWORDREGISTER } from '~/constants/registerConstants';

export const setNameRegister = (payload) => {
    return {
        type: SET_NAMEREGISTER,
        payload,
    };
};

export const setPasswordRegister = (payload) => {
    return {
        type: SET_PASSWORDREGISTER,
        payload,
    };
};

export const setRePasswordRegister = (payload) => {
    return {
        type: SET_REPASSWORDREGISTER,
        payload,
    };
};
