import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../../pages/Home/ProductCard";
const categories = ["Điện thoại", "Phụ kiện"];
const NewProduct = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert, category]);

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Sản phẩm mới</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  Tất cả
                </li>

                <li data-filter=".oranges">Điện thoại</li>
                <li data-filter=".fresh-meat">Phụ kiện</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
