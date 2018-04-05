import axios from 'axios';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function nameReducer (state = initialState.name, action){
   // console.log(`name reducer change  prev:  state ${state} `);
    switch(action.type) {
        case types.LOAD_NAME_SUCCESS:{
            return  action.name
            }

        default:
            return state
    }
}