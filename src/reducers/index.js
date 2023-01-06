import { combineReducers } from "redux";
import authorization from "./authorization.reducer";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  authorization,
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default rootReducer;
