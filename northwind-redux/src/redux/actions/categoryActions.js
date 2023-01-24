import * as actionTypes from "./actionTypes";


export function changeCagetory(category) {
    return {
        type:actionTypes.CHANGE_CATEGORY, payload:category
    }
}