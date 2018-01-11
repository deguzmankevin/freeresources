const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Biology Junction', 'http://www.biologyjunction.com/'],
  ['Khan Academy', 'https://www.khanacademy.org/'], 
  ['Bozeman Science', 'http://www.bozemanscience.com/biology-main-page/']
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
const Biology = function() {
  return (
    <div style={divStyle}>
      <h1>Biology</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

            <Link to='/'><p style={endStyle}>Go home</p></Link>
    </div>
  );
}

module.exports = Biology;