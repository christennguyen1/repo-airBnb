import { SET_SPINNER_END, SET_SPINNER_START } from "../Constants/spinnerConstant";


let initailState = {
    isLoading: false,
    count: 0,
};

export const spinnerReducer = (state = initailState, action) => {
    switch (action.type) {
        case SET_SPINNER_START: {
            state.count++;

            state.isLoading = true;
            return { ...state };
        }

        case SET_SPINNER_END: {
            state.count--;

            if (state.count === 0) {
                state.isLoading = false;
            }
            return { ...state };
        }

        default:
            return { ...state };
    }
}