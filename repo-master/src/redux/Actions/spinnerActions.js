import { SET_SPINNER_END, SET_SPINNER_START } from "../Constants/spinnerConstant";


export const set_spinner_start = () => {
    return { type: SET_SPINNER_START };
}

export const set_spinner_end = () => {
    return { type: SET_SPINNER_END };
}