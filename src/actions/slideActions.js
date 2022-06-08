import {
    SET_IMG01,
    SET_IMG02,
    SET_IMG03,
    SET_IMG04,
    DELETE_IMG01,
    DELETE_IMG02,
    DELETE_IMG03,
    DELETE_IMG04,
    ADD_SLIDE,
} from '~/constants/sliderConstants';

export const setIMG1 = (payload) => {
    return {
        type: SET_IMG01,
        payload,
    };
};

export const setIMG2 = (payload) => {
    return {
        type: SET_IMG02,
        payload,
    };
};

export const setIMG3 = (payload) => {
    return {
        type: SET_IMG03,
        payload,
    };
};

export const setIMG4 = (payload) => {
    return {
        type: SET_IMG04,
        payload,
    };
};

export const addSlide = (payload) => {
    return {
        type: ADD_SLIDE,
        payload,
    };
};

export const deleteImg1 = (payload) => {
    return {
        type: DELETE_IMG01,
        payload,
    };
};

export const deleteImg2 = (payload) => {
    return {
        type: DELETE_IMG02,
        payload,
    };
};

export const deleteImg3 = (payload) => {
    return {
        type: DELETE_IMG03,
        payload,
    };
};

export const deleteImg4 = (payload) => {
    return {
        type: DELETE_IMG04,
        payload,
    };
};
