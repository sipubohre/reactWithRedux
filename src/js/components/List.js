// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import Span from "./RemoveArticle"
const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
        <Span id={el.id} />
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;