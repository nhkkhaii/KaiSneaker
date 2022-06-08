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

export const initStateSlide = {
    IMAGEID: '1',
    IMAGESHOES1: '',
    IMAGESHOES2: '',
    IMAGESHOES3: '',
    IMAGESHOES4: '',
};

export const slideReducer = (state, action) => {
    switch (action.type) {
        case SET_IMG01:
            return {
                ...state,
                IMAGESHOES1: action.payload,
            };
            break;
        case SET_IMG02:
            return {
                ...state,
                IMAGESHOES2: action.payload,
            };
            break;
        case SET_IMG03:
            return {
                ...state,
                IMAGESHOES3: action.payload,
            };
            break;
        case SET_IMG04:
            return {
                ...state,
                IMAGESHOES4: action.payload,
            };
            break;

        case DELETE_IMG01:
            return {
                ...state,
                IMAGESHOES1: '',
            };
            break;
        case DELETE_IMG02:
            return {
                ...state,
                IMAGESHOES2: '',
            };
            break;
        case DELETE_IMG03:
            return {
                ...state,
                IMAGESHOES3: '',
            };
            break;
        case DELETE_IMG04:
            return {
                ...state,
                IMAGESHOES4: '',
            };
            break;
        case ADD_SLIDE:
            return {
                ...state,
                IMAGESHOES1: action.payload[0].IMAGESHOES1,
                IMAGESHOES2: action.payload[0].IMAGESHOES2,
                IMAGESHOES3: action.payload[0].IMAGESHOES3,
                IMAGESHOES4: action.payload[0].IMAGESHOES4,
            };
            break;
        default:
            throw new Error();
    }
};
