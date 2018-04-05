import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function serialsReducer (state=initialState.serials, action){
  switch(action.type){
      case types.LOAD_SERIALS_SUCCESS:{
          return [...action.serials];
      }
      default:
          return state;
  }
}
