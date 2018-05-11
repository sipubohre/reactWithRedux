import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div className="row" style={{'marginRight': 0, 'marginLeft': 0}}>
    <div className="col-md-1"></div>
    <div className="col-md-4">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-1"></div>
    <div className="col-md-4">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-1"></div>
  </div>
);

export default App;