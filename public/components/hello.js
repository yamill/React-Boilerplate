var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render(){
    return (
      <div>Hello world! This is an simple React App running on a Node/Express server :)</div>
    )
  }
});

module.exports = Hello;
