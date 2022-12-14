import React, { Fragment, useEffect, useState } from "react";
import Menu from "../Header/Menu";
import Sideb from "../sidebar/Sideb";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getProduct,
  getProductBy3to10,
} from "../../../actions/productAction";
import Slider from "@material-ui/core/Slider";
import Pagination from "react-js-pagination";
import ProductCard from "../../../pages/Home/ProductCard";
import { Button } from "@material-ui/core";

const categories = [
  "Apple",
  "Samsung",
  "Xiaomi Redmi",
  "Realmi",
  "Huawei",
  "OPPO",
  "Vivo",
  "Nokia",
  "ASUS",
  "Sony",
  "OnePlus",
];
const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  // const [keyword, setKeyword] = useState("");
  const [ratings, setRatings] = useState(0);
  // const [price, setPrice] = useState([0, 100000000]);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;
  // setCategory(match?.params.keyword);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = filteredProductsCount;
  const priceHandler = () => {
    // setPrice(newPrice);
    dispatch(getProductBy3to10(keyword, currentPage, category, ratings));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, category, ratings));
  }, [dispatch, keyword, currentPage, category, ratings, alert, error]);
  return (
    <>
      {/* <Loader /> */}
      <Menu />
      <Sideb />
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{
          backgroundImage: `url("img/breadcrumb.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Danh m???c</h4>
                  <ul>
                    {categories.map((category) => (
                      <li key={category} onClick={() => setCategory(category)}>
                        <a href="#">{category}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>????nh gi?? </h4>
                  <div className="price-range-wrap">
                    <Slider
                      value={ratings}
                      onChange={(e, newRating) => {
                        setRatings(newRating);
                      }}
                      aria-labelledby="continuous-slider"
                      valueLabelDisplay="auto"
                      min={0}
                      max={5}
                    />
                  </div>
                </div>
                <div className="sidebar__item">
                  <h4>Gi?? ti???n </h4>
                  <div className="price-range-wrap">
                    {/* <Slider
                      value={price}
                      onChange={priceHandler}
                      aria-labelledby="continuous-slider"
                      valueLabelDisplay="auto"
                      min={0}
                      max={100000000}
                    /> */}
                    <Button onClick={priceHandler}>D?????i 10tr</Button>
                  </div>
                </div>
                {/* <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min={10}
                      data-max={540}
                    >
                      <div className="ui-slider-range ui-corner-all ui-widget-header" />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div> */}
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  {/* <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value={0}>Default</option>
                        <option value={0}>Default</option>
                      </select>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2" />
                      <span className="icon_ul" />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
              <div className="product__pagination">
                {resultPerPage < count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
