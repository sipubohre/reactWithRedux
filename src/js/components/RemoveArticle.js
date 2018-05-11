// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
};

class Span extends Component {
  constructor() {
    super();

    this.removelihandler = this.removelihandler.bind(this);
  }

  removelihandler(event) {
    const id = event.target.id
    this.props.dispatch(removeArticle({id}));
  }

  render() {
    return (
      <span id={this.props.id} className="removeli" onClick={this.removelihandler}>x</span>
    );
  }
}

const RemovedLi = connect()(Span);

export default RemovedLi;