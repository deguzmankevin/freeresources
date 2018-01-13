const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['edX', 'https://www.edx.org/', 'Thousands of free courses from top-tier universities!'],
  ['Codecademy', 'https://www.codecademy.com/learn', 'A great place to begin your coding journey'],  
  ['Khan Academy', 'https://www.khanacademy.org/computing', 'Quality readings and videos'],
  ['Bento.io', 'https://bento.io/', 'Learn to be a self-taught expert developer']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
 const endStyle = {
   'bottom': '0',
   'position': 'absolute',
   'left': '50%'
 }
/* the main page for the about route of this app */
const CS = function() {
  return (
    <div style={divStyle}>
      <h1>Computer Science</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

           <Link to='/'><p style={endStyle}>Go home</p></Link>
    </div>
  );
}

module.exports = CS;