import {
    SET_IDACCOUNT,
    SET_SHIPPINGINFONAME,
    SET_ADDRESS,
    SET_SHIPPINGINFOPHONE,
    SET_SHIPPINGINFOID,
} from '~/constants/addressConstants';

export const setIDAccount = (payload) => {
    return {
        type: SET_IDACCOUNT,
        payload,
    };
};

export const setInfoName = (payload) => {
    return {
        type: SET_SHIPPINGINFONAME,
        payload,
    };
};

export const setIDInfo = (payload) => {
    return {
        type: SET_SHIPPINGINFOID,
        payload,
    };
};

export const setAddress = (payload) => {
    return {
        type: SET_ADDRESS,
        payload,
    };
};

export const setInfoPhone = (payload) => {
    return {
        type: SET_SHIPPINGINFOPHONE,
        payload,
    };
};
