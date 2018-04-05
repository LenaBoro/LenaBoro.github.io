import * as types from './actionTypes';

export function loadName(name){
    return {
        type: types.LOAD_NAME_SUCCESS,
        name
    };
}