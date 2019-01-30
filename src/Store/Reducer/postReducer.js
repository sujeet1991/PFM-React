import {FETCH_DATA} from '../Action/type';

const initialState={
    alldata:[],
}

export default function(state=initialState,action) {
  switch(action.type){
      case FETCH_DATA:
      return{
          ...state,
          alldata:action.payload
      }
      default:
      return state;
  }
}
