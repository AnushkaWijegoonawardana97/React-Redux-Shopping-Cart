import { GET_PRODUCTS } from "../actions/type";

const initialState = {
  products: [],
  product: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
      break;

    default:
      return state;
  }
}
