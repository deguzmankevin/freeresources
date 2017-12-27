const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Khan Academy', 'https://www.khanacademy.org/'],
  ['Professor Leonard', 'https://www.youtube.com/channel/UCoHhuummRZaIVX7bD4t2czg'],
  ['Paul\'s Online Math Notes','http://tutorial.math.lamar.edu/' ],
  ['Math Doctor Bob', 'https://www.youtube.com/user/MathDoctorBob'],
  ['Patrick JMT', 'http://patrickjmt.com/'],
  ['Math Vids', 'http://mathvids.com/']
];


const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}

/* the main page for the about route of this app */
const Math = function() {
  return (
    <div style={divStyle}>
      <h1>Math</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList style={divStyle}items={resources} />

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Math;