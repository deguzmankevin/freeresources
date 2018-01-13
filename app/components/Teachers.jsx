const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Piazza', 'https://piazza.com/', 'A great way for students to answer each other\'s questions']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}

/* the main page for the teachers route of this app */
const Teachers = function() {
  return (
    <div style={divStyle}>
      <h1>Teacher Resources</h1>
      <h2>Here are some free resources to aid you in your classroom.</h2>
      <UnorderedList items={resources} />
   

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Teachers;