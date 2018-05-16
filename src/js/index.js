import React from "react";
import { render } from 'react-dom';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import storeobject from "./store/index";
import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/header";
import { PersistGate } from 'redux-persist/integration/react'
render(
  <Provider store={storeobject.store}>
  	<PersistGate loading={null} persistor={storeobject.persistor}>
    	<Router>
	  		<div className="row" style={{'marginRight': 0, 'marginLeft': 0}}>
			    <div className="col-md-12 center">
			      	<Header />
	    	  		<ul>
	    	  			<li><Link to="/managearticles">View All Articles</Link></li>
	    	  			<li><Link to="/addarticle">Add Article</Link></li>
	    	  		</ul>
			    </div>
	          	<Switch>
		            <Route exact path="/" component={List} />
		            <Route exact path="/managearticles" component={List} />
		            <Route exact path="/addarticle" component={Form} />
	          	</Switch>
          	</div>
	    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);