const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['edX', 'https://www.edx.org/'],
  ['Codecademy', 'https://www.codecademy.com/learn']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
/* the main page for the about route of this app */
const CS = function() {
  return (
    <div style={divStyle}>
      <h1>Computer Science</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = CS;