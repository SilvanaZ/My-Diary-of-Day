import { types } from '../types';

const initializeState = {
    loading: false,
    msgError: null
}

export const uiReducer = (state = initializeState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            };
        case types.uiRemoveError:
            return {
                loading: false,
                msgError: null
            }
        case types.uiStartLoading:
            return {
                loading: true,
                msgError: null
            }
        case types.uiFinishLoading:
            return {
                loading: false,
                msgError: null
            }

        default:
            return state;
    }
}
