import { SET_BRANDNAME, SET_DESCRIPTIONBRAND, ADD_BRAND } from '~/constants/brandConstants';

export const setBrandName = (payload) => {
    return {
        type: SET_BRANDNAME,
        payload,
    };
};

export const setDesBrand = (payload) => {
    return {
        type: SET_DESCRIPTIONBRAND,
        payload,
    };
};

export const addBrand = (payload) => {
    return {
        type: ADD_BRAND,
        payload,
    };
};
