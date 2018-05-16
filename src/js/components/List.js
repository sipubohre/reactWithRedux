// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import Span from "./RemoveArticle"
const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  	<div className="col-md-12">
      <h2>Articles</h2>
	  <ul className="list-group list-group-flush">
	    {articles.map(el => (
	      <li className="list-group-item" key={el.id}>
	        {el.title}
	        <Span id={el.id} />
	      </li>
	    ))}
	  </ul>
	</div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;