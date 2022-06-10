import {
    ADD_PRODUCT,
    SET_ID,
    SET_NAME,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_IMG,
    DELETE_IMG,
    SET_BRAND,
} from '~/constants/productConstants';

// init state
export const initState = {
    SHOESID: '',
    IDBRAND: '',
    SHOESNAME: '',
    SHOESPRICE: '',
    SHOESDESCRIPTION: '',
    SHOESIMG: [],
};

export const productDetailsReducer = (state, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                SHOESID: action.payload,
            };
            break;
        case SET_BRAND:
            return {
                ...state,
                IDBRAND: action.payload,
            };
            break;
        case SET_NAME:
            return {
                ...state,
                SHOESNAME: action.payload,
            };
            break;

        case SET_DESCRIPTION:
            return {
                ...state,
                SHOESDESCRIPTION: action.payload,
            };
            break;
        case SET_PRICE:
            return {
                ...state,
                SHOESPRICE: action.payload,
            };
            break;
        case SET_IMG:
            return {
                ...state,
                SHOESIMG: [...state.SHOESIMG, action.payload],
            };
            break;
        case DELETE_IMG:
            return {
                ...state,
                SHOESIMG: state.SHOESIMG.filter((item) => item !== action.payload),
            };
            break;
        case ADD_PRODUCT:
            return {
                ...state,
            };
            break;
        default:
            throw new Error();
    }
};
