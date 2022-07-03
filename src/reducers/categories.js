import { GET_CATEGORIES } from "../actions/type";

const initialState = {
  categories: [],
  category: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
      break;

    default:
      return state;
  }
}
