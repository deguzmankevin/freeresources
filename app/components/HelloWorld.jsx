const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resourcesArray = [
  'https://www.khanacademy.org/',
  'http://tutorial.math.lamar.edu/',
  'test - 1',
  'test - 2'
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}

const h1Style = {
  size: '30px',
  color: 'skyblue',
  'text-align': 'center'
};
const imgStyle = {
  height: '20%', 
  width: '20%'
}

/* the main page for the index route of this app */
const HelloWorld = function(){
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>
      <img style= {imgStyle}src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Flearning.gif?1513796638741'></img>
        should be free! </h1>
      <br></br>
      <Link to='/about'>Learn about this website!</Link>
      
     
    <br></br>
     
        <Link to='/teachers'>For Teachers</Link>
        <br></br>
        <Link to='/students'>For Students</Link>
        
     <br></br>

      
      <Link to='/test'>Go to testing page</Link>

    </div>
  );
}

module.exports = HelloWorld;