import axios from "axios";
import { GET_PRODUCT, GET_PRODUCTS } from "./type";

// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (productid) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productid}`
    );

    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
