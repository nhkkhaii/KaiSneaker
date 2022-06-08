import { SET_BRANDNAME, SET_DESCRIPTIONBRAND, ADD_BRAND } from '~/constants/brandConstants';

export const initStateBrand = {
    IDBRAND: '',
    BRANDNAME: '',
    DESCRIPTIONBRAND: '',
};

export const detailBrandReducer = (state, action) => {
    switch (action.type) {
        case SET_BRANDNAME:
            return {
                ...state,
                BRANDNAME: action.payload,
            };
            break;
        case SET_DESCRIPTIONBRAND:
            return {
                ...state,
                DESCRIPTIONBRAND: action.payload,
            };
            break;
        case ADD_BRAND:
            return {
                IDBRAND: action.payload.IDBRAND,
                BRANDNAME: action.payload.BRANDNAME,
                DESCRIPTIONBRAND: action.payload.DESCRIPTIONBRAND,
            };
            break;
        default:
            throw new Error();
    }
};
