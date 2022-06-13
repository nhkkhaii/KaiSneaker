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

export const initStateUser = {
    IDACCOUNT: '',
    FULLNAME: '',
    GENDER: '',
    CCCD: '',
    EMAIL: '',
    NUMBERPHONE: '',
    DATEOFBIRTH: '',
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case SET_FULLNAME:
            return {
                ...state,
                FULLNAME: action.payload,
            };
            break;
        case SET_PASSWORD:
            return {
                ...state,
                PASSWORD: action.payload,
            };
            break;
        case SET_CMND:
            return {
                ...state,
                CCCD: action.payload,
            };
            break;
        case SET_IDACCOUNT:
            return {
                ...state,
                IDACCOUNT: action.payload,
            };
            break;
        case SET_GENDER:
            return {
                ...state,
                GENDER: action.payload,
            };
            break;
        case SET_EMAIL:
            return {
                ...state,
                EMAIL: action.payload,
            };
            break;
        case SET_NUMBERPHONE:
            return {
                ...state,
                NUMBERPHONE: action.payload,
            };
            break;
        case SET_DATEOFBIRTH:
            return {
                ...state,
                DATEOFBIRTH: action.payload,
            };
            break;

        default:
            throw new Error();
    }
};
