import { SET_SHOESID, SET_IDSIZE, SET_QUANTITYSTOCK } from '~/constants/stockConstants';

export const initStateStock = {
    SHOESID: '',
    IDSIZE: '',
    QUANTITYINSTOCK: '',
};

export const stockReducer = (state, action) => {
    switch (action.type) {
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
        case SET_QUANTITYSTOCK:
            return {
                ...state,
                QUANTITYINSTOCK: action.payload,
            };
            break;

        default:
            throw new Error();
    }
};
