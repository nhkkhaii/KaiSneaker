import {
    SET_BRANDNAME,
    SET_DESCRIPTIONBRAND,
    ADD_BRAND,
    SET_IMAGEBRAND,
    DELETE_IMAGEBRAND,
} from '~/constants/brandConstants';

export const setBrandName = (payload) => {
    return {
        type: SET_BRANDNAME,
        payload,
    };
};

export const deleteImgBrand = (payload) => {
    return {
        type: DELETE_IMAGEBRAND,
    };
};

export const setImgBrand = (payload) => {
    return {
        type: SET_IMAGEBRAND,
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
