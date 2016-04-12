var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/hello');

var App = React.createClass({
  render(){
    return (
      <Hello />
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
