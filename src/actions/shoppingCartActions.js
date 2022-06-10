import {
    SET_IDACCOUNT,
    SET_SHOESID,
    SET_IDSIZE,
    SET_QUANTITYUP,
    SET_QUANTITYDOWN,
} from '~/constants/shoppingCartConstants';

export const setIDAccount = (payload) => {
    return {
        type: SET_IDACCOUNT,
        payload,
    };
};

export const setShoesID = (payload) => {
    return {
        type: SET_SHOESID,
        payload,
    };
};

export const setIDSize = (payload) => {
    return {
        type: SET_IDSIZE,
        payload,
    };
};

export const setQuantityUP = () => {
    return {
        type: SET_QUANTITYUP,
    };
};
export const setQuantityDown = () => {
    return {
        type: SET_QUANTITYDOWN,
    };
};
