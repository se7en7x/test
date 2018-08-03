import {RECEIVE_WEATHER} from "../constants/ActionTypes";

const defaultLocation = {};

export default function reducer(state = defaultLocation , action) {
  switch (action.type) {
    case RECEIVE_WEATHER: 
     return action.location;
  }
  return state;
}