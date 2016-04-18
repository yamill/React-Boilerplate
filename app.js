import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Home from './views/home';
import Subpage from './views/subpage';

class App extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="subpage" component={Subpage}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
