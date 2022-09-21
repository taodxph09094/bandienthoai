import React, { useState } from "react";

const Sidebar = ({ newFeed, history }) => {
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
      <li onClick={() => setKeyword(newFeed)}>
        <a href="#">{newFeed.category}</a>
      </li>
    </>
  );
};

export default Sidebar;
