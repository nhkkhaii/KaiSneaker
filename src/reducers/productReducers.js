import {
    ADD_PRODUCT,
    SET_ID,
    SET_NAME,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_IMG,
    DELETE_IMG,
} from '~/constants/productConstants';

// init state
export const initState = {
    id: '',
    name: '',
    price: '',
    description: '',
    img: [],
};

export const productDetailsReducer = (state, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.payload,
            };
            break;
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
            break;

        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };
            break;
        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
            break;
        case SET_IMG:
            return {
                ...state,
                img: [...state.img, action.payload],
            };
            break;
        case DELETE_IMG:
            return {
                ...state,
                img: state.img.filter((item) => item !== action.payload),
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
