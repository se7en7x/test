// import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

const defaultTheme = {
    "color": "blue"
};

export default function reducer(state = defaultTheme , action) {
  switch (action.type) {
  // case INCREMENT_NUM: 
  //   return state + 1;
  // case DECREMENT_NUM:
  //   return state - 1;
  // case RESET:
  //   return state = action.payload;
  }

  return state;
}