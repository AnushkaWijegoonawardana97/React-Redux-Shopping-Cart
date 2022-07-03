import axios from "axios";
import { GET_CATEGORIES } from "./type";

// Get Products
export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
