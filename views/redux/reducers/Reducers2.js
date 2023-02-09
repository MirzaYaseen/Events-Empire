import {
  ADD_TO_WHISHLIST,
  REMOVE_FROM_WHISHLIST,
} from '../ActionTypes';

const Reducers2 = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WHISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WHISHLIST:
      const deletedArray2 = state.filter((item, index) => {
        return index != action.payload;
      });
      return deletedArray2;

    default:
      return state;
  }
};
export default Reducers2;
