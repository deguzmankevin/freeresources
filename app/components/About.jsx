const React = require('react');
const Link = require('react-router-dom').Link


const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}

/* the main page for the about route of this app */
const About = function() {
  return (
    <div style={divStyle}>
      <h1>About/Mission</h1>

      <p>I truly believe that money shouldn't play a big factor in the quality of education one receives. I created this app
          to aid students who need more help in their classes at no cost at all. </p>
      <br></br>
      <p>This website contains websites to learn subjects and some resources you might need in classes, all for free!</p>

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = About;