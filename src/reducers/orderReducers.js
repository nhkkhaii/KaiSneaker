import { SET_SHOPPINGINFOID, SET_IDACCOUNT, SET_TOTAL } from '~/constants/orderConstants';

// init state
export const initStateOrder = {
    SHOPPINGINFOID: '',
    IDACCOUNT: '',
    TOTAL: 0,
};

export const orderReducer = (state, action) => {
    switch (action.type) {
        case SET_SHOPPINGINFOID:
            return {
                ...state,
                SHOPPINGINFOID: action.payload,
            };
            break;
        case SET_IDACCOUNT:
            return {
                ...state,
                IDACCOUNT: action.payload,
            };
            break;
        case SET_TOTAL:
            return {
                ...state,
                TOTAL: action.payload,
            };
            break;
        default:
            throw new Error();
    }
};
