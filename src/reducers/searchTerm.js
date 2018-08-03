import * as actionTypes from "../constants/actionTypes";

export default function reducer(state = "New York", action) {
  switch (action.type) {
   case actionTypes.FETCH_LOCATIONS: 
     return action.searchTerm;
  // case DECREMENT_NUM:
  //   return state - 1;
  // case RESET:
  //   return state = action.payload;
  }

  return state;
}