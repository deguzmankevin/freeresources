const React = require('react');
const Link = require('react-router-dom').Link


const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}

/* the main page for the students route of this app */
const Students = function() {
  return (
    <div style={divStyle}>
      <h1>Student Resources</h1>
      
    
      <Link to='/math'>Learn Math!</Link>
      <br></br>
      <Link to='/cs'>Learn Computer Science!</Link>
      <br></br>
      <Link to='/chemistry'>Learn Chemistry!</Link>
      <br></br>
      <Link to='/english'>Learn English!</Link>
      <br></br>
      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Students;