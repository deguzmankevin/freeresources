const React = require('react');
const Link = require('react-router-dom').Link


const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
const pStyle = {
  'margin-top': '3%'
}
 const endStyle = {
   'bottom': '0',
   'position': 'absolute',
   'left': '50%'
 }
/* the main page for the students route of this app */
const Students = function() {
  return (
    <div style={divStyle}>
      <h1>Student Resources</h1>
      <h2></h2>
      <img src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fmath.jpg?1515565439949'></img>
      <Link to='/math'><p >Learn Math!</p></Link>
     <img src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fcs.jpg?1515565437809'></img>
      <Link to='/cs'><p style={pStyle}>Learn Computer Science!</p></Link>
     <img src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fchemistry.jpg?1515565437041'></img>
      <Link to='/chemistry'><p style={pStyle}>Learn Chemistry!</p></Link>
     <img src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fenglish.jpg?1515565435497'></img>
      <Link to='/english'><p style={pStyle}>Learn English!</p></Link>
    <img src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fbiology.jpg?1515565436210'></img>
      <Link to='/biology'><p style={pStyle}>Learn Biology!</p></Link>
      <Link to='/'><p style={{}}>Go home</p></Link>
    </div>
  );
}

module.exports = Students;