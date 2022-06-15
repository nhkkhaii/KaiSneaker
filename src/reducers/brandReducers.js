import {
    SET_BRANDNAME,
    SET_DESCRIPTIONBRAND,
    ADD_BRAND,
    SET_IMAGEBRAND,
    DELETE_IMAGEBRAND,
} from '~/constants/brandConstants';

export const initStateBrand = {
    IDBRAND: '',
    BRANDNAME: '',
    DESCRIPTIONBRAND: '',
    IMAGEBRAND: '',
};

export const detailBrandReducer = (state, action) => {
    switch (action.type) {
        case SET_BRANDNAME:
            return {
                ...state,
                BRANDNAME: action.payload,
            };
            break;

        case SET_IMAGEBRAND:
            return {
                ...state,
                IMAGEBRAND: action.payload,
            };
            break;
        case DELETE_IMAGEBRAND:
            return {
                ...state,
                IMAGEBRAND: '',
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
                IMAGEBRAND: action.payload.IMAGEBRAND,
            };
            break;
        default:
            throw new Error();
    }
};
