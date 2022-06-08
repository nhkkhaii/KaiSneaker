import { SET_ID, SET_NAME, SET_IMG, SET_PRICE, SET_DESCRIPTION, DELETE_IMG } from '~/constants/productConstants';

export const setID = (payload) => {
    return {
        type: SET_ID,
        payload,
    };
};

export const setName = (payload) => {
    return {
        type: SET_NAME,
        payload,
    };
};

export const setImg = (payload) => {
    return {
        type: SET_IMG,
        payload,
    };
};

export const setPrice = (payload) => {
    return {
        type: SET_PRICE,
        payload,
    };
};

export const setDescription = (payload) => {
    return {
        type: SET_DESCRIPTION,
        payload,
    };
};

export const deleteImg = (payload) => {
    return {
        type: DELETE_IMG,
        payload,
    };
};
