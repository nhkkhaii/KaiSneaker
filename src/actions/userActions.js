import {
    SET_FULLNAME,
    SET_GENDER,
    SET_EMAIL,
    SET_NUMBERPHONE,
    SET_DATEOFBIRTH,
    SET_CMND,
    SET_PASSWORD,
    SET_AVATAR,
    SET_IDACCOUNT,
} from '~/constants/userConstants';

export const setIDAccount = (payload) => {
    return {
        type: SET_IDACCOUNT,
        payload,
    };
};

export const setAvatar = (payload) => {
    return {
        type: SET_AVATAR,
        payload,
    };
};

export const setFullName = (payload) => {
    return {
        type: SET_FULLNAME,
        payload,
    };
};
export const setGender = (payload) => {
    return {
        type: SET_GENDER,
        payload,
    };
};
export const setEmail = (payload) => {
    return {
        type: SET_EMAIL,
        payload,
    };
};
export const setNumberPhone = (payload) => {
    return {
        type: SET_NUMBERPHONE,
        payload,
    };
};
export const setDateOfBirth = (payload) => {
    return {
        type: SET_DATEOFBIRTH,
        payload,
    };
};
export const setPassword = (payload) => {
    return {
        type: SET_PASSWORD,
        payload,
    };
};
export const setCCCD = (payload) => {
    return {
        type: SET_CMND,
        payload,
    };
};
