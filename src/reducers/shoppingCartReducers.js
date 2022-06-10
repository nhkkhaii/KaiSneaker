import {
    SET_IDACCOUNT,
    SET_SHOESID,
    SET_IDSIZE,
    SET_QUANTITYUP,
    SET_QUANTITYDOWN,
} from '~/constants/shoppingCartConstants';

export const initStateShoppingCart = {
    IDACCOUNT: '',
    SHOESID: '',
    IDSIZE: '',
    QUANTITY: 1,
};

export const shoppingCartReducer = (state, action) => {
    switch (action.type) {
        case SET_IDACCOUNT:
            return {
                ...state,
                IDACCOUNT: action.payload,
            };
            break;
        case SET_SHOESID:
            return {
                ...state,
                SHOESID: action.payload,
            };
            break;
        case SET_IDSIZE:
            return {
                ...state,
                IDSIZE: action.payload,
            };
            break;
        case SET_QUANTITYUP:
            return {
                ...state,
                QUANTITY: state.QUANTITY + 1,
            };
            break;
        case SET_QUANTITYDOWN:
            return {
                ...state,
                QUANTITY: state.QUANTITY - 1,
            };
            break;
        default:
            throw new Error();
    }
};
