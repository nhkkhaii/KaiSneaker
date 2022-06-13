import { SET_SHOPPINGINFOID, SET_IDACCOUNT, SET_TOTAL } from '~/constants/orderConstants';
export const setIDUser = (payload) => {
    return {
        type: SET_IDACCOUNT,
        payload,
    };
};

export const setSHOPPINGINFOID = (payload) => {
    return {
        type: SET_SHOPPINGINFOID,
        payload,
    };
};

export const setTotal = (payload) => {
    return {
        type: SET_TOTAL,
        payload,
    };
};
