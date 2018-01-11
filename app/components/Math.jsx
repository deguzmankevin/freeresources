const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Khan Academy', 'https://www.khanacademy.org/', 'Short lecture videos with topics from arithmetic to linear algebra'],
  ['Professor Leonard', 'https://www.youtube.com/channel/UCoHhuummRZaIVX7bD4t2czg', 'Replace your professor with this great lecturer!'],
  ['Paul\'s Online Math Notes','http://tutorial.math.lamar.edu/', 'Notes from topics of Algebra, Calculus 1-3, Differential Equations' ],
  ['Math Doctor Bob', 'https://www.youtube.com/user/MathDoctorBob', 'Short lecture videos on advanced math'],
  ['Patrick JMT', 'http://patrickjmt.com/', 'Short lecture videos with many examples'],
  ['Math Vids', 'http://mathvids.com/', 'Videos from middle school to college math']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center', 
  size: '50px'
}

 const endStyle = {
   'bottom': '0',
   'position': 'absolute',
   'left': '50%'
 }
 
 const h1Style = {
  'font-size': '50px' 
 }
/* the main page for the about route of this app */
const Math = function() {
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Math</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList style={divStyle}items={resources} />

           <Link to='/'><p>Go home</p></Link>
    </div>
  );
}

module.exports = Math;