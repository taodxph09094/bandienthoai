import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getNewFeed } from "../../actions/newFeedAction";
import Menu from "../../component/layout/Header/Menu";
import NewCard from "./NewCard";
import Sidebar from "./Sidebar";

const News = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, newFeeds } = useSelector((state) => state.newFeeds);
  console.log(newFeeds);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getNewFeed());
  }, [dispatch, error, alert]);
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/news/${keyword}`);
    } else {
      history.push("/news");
    }
  };
  return (
    <>
      <Menu />
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
                <h2>
                  Tin tức<code></code>
                </h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Tin tức</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------- */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#" onSubmit={searchSubmitHandler}>
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button type="submit">
                      <span className="icon_search" />
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Danh mục</h4>
                  <ul>
                    <li>
                      <a href="#">Tất cả</a>
                    </li>

                    {newFeeds &&
                      newFeeds.map((newFeed) => (
                        <Sidebar key={newFeed._id} newFeed={newFeed} />
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="row">
                {newFeeds &&
                  newFeeds.map((newFeed) => (
                    <NewCard key={newFeed._id} newFeed={newFeed} />
                  ))}
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
