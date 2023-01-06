import fakestoreapi from "../services/fakeApi";

export const userActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCT: "SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
  FETCH_PRODUCT: "FETCH_PRODUCT",
};

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreapi.get("/products");
  dispatch({
    type: userActionTypes.FETCH_PRODUCT,
    payload: response,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({
    type: userActionTypes.SELECTED_PRODUCT,
    payload: response,
  });
};
export const setProducts = (products) => {
  return {
    type: userActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: userActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: userActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
