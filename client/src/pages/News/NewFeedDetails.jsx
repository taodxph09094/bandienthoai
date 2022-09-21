import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getNewFeed,
  getNewFeedDetails,
} from "../../actions/newFeedAction";
import Menu from "../../component/layout/Header/Menu";
import Sidebar from "./Sidebar";

const NewFeedDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { newFeed, error } = useSelector((state) => state.newFeedDetails);
  const { loading, newFeeds } = useSelector((state) => state.newFeeds);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getNewFeedDetails(match.params.id));
    dispatch(getNewFeed());
  }, [dispatch, match.params.id, error, alert]);
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
      {/* <section
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
      </section> */}
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
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
              <div className="blog__details__text">
                <h2>{newFeed.title}</h2>
                <img src={newFeed.image} alt="" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${newFeed.content}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewFeedDetails;
