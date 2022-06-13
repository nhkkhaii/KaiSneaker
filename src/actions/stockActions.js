import { SET_SHOESID, SET_IDSIZE, SET_QUANTITYSTOCK } from '~/constants/stockConstants';
export const setSHOESID = (payload) => {
    return {
        type: SET_SHOESID,
        payload,
    };
};

export const setIDSIZE = (payload) => {
    return {
        type: SET_IDSIZE,
        payload,
    };
};

export const setQUANTITYSTOCK = (payload) => {
    return {
        type: SET_QUANTITYSTOCK,
        payload,
    };
};
