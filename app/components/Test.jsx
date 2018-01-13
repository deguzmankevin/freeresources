const React = require('react');
const Link = require('react-router-dom').Link

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
const endStyle = {
   'bottom': '0',
   'position': 'absolute',
   'left': '50%'
 }

 function handleSubmit(e){
    e.preventDefault();
    alert('Error: this website is still under construction. Sorry!');
   document.getElementById('add-website').reset();
   
  }
/* the main page for the about route of this app */
const Test = function() {
 
  return (
    <div style={divStyle}>
      <h1>Add a website!</h1>

      <h2>Enter a website below with a description and we'll add it when we can!</h2>
        
      
      <form id='add-website'>
        Website:<br></br>
        <input type='text'></input><br></br>
        URL:<br></br>
        <input type='text'></input><br></br>
        Description:<br></br>
        <input type='text'></input><br></br>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
        
        </form>
      
      
      
      <Link to='/'><p style={endStyle}>Go home</p></Link>
    </div>
  );
}

module.exports = Test;