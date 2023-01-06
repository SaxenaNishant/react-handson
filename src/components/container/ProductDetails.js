import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchProduct,
  removeSelectedProducts,
} from "../../actions/productActions";
import { useSelector } from "react-redux";

export default function ProductListing() {
  const { productId } = useParams();
  let image, title, price, category, description;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  const product = useSelector((state) => {
    console.log("????", state);

    return state.product;
  });
  if (product?.product) {
    ({ image, title, price, category, description } = product.product.data);
  }

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">And</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="ui column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
