import {
    SET_IDACCOUNT,
    SET_SHIPPINGINFONAME,
    SET_ADDRESS,
    SET_SHIPPINGINFOPHONE,
    SET_SHIPPINGINFOID,
} from '~/constants/addressConstants';

export const initStateAddress = {
    IDACCOUNT: '',
    SHOPPINGINFOID: '',
    SHOPPINGINFONAME: '',
    ADDRESS: '',
    SHOPPINGINFOPHONE: '',
};

export const addressReducer = (state, action) => {
    switch (action.type) {
        case SET_IDACCOUNT:
            return {
                ...state,
                IDACCOUNT: action.payload,
            };
            break;
        case SET_SHIPPINGINFOID:
            return {
                ...state,
                SHOPPINGINFOID: action.payload,
            };
            break;
        case SET_SHIPPINGINFONAME:
            return {
                ...state,
                SHOPPINGINFONAME: action.payload,
            };
            break;
        case SET_ADDRESS:
            return {
                ...state,
                ADDRESS: action.payload,
            };
            break;
        case SET_SHIPPINGINFOPHONE:
            return {
                ...state,
                SHOPPINGINFOPHONE: action.payload,
            };
            break;
        default:
            throw new Error();
    }
};
