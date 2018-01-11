const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');


const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
  
}
const pStyle = {
  
  size:'50px', 
  
}
const h1Style = {
  size: '50px',
  color: 'skyblue',
  'text-align': 'center'
};
const imgStyle = {
  height: '40%', 
  width: '40%'
}
const itemStyle = {
   'vertical-align': 'top', 
  display: 'inline-block', 
   'text-align': 'center',
   
  
}
 const endStyle = {
   'bottom': '0',
   'position': 'absolute',
   left:'42.5%'
 }
 
/* the main page for the index route of this app */
const HelloWorld = function(){
  return (
   
    <div style={divStyle}>
      <h1 style={h1Style}>
      <img style= {imgStyle}src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Flearning.gif?1513796638741'></img>
        should be free! </h1>
    
      <Link to='/about'style={pStyle}><p style={pStyle}>Learn about this website!</p></Link>
      
     
    <div style={{'margin-top': '5%'}}>
     <div style={itemStyle}>
      <img style={{height: '100%', width: '45%'}}src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fstudent.jpg?1515543222213'></img>
      <Link to='/students'><p>For Students</p></Link>
      </div>
      <div style={itemStyle}>
      <img style={{height: '60%', width: '60%'}}src='https://cdn.glitch.com/c96fa905-6b40-463a-9269-a0e99a4d39ba%2Fteacher.jpg?1515542910402'></img>
      <Link to='/teachers'><p>For Teachers</p></Link>
        </div>
     
  </div>
      <br></br>
      <Link to='/test'><p style={endStyle}>Have a website you want to add?</p></Link>

    </div>
      
  );
}

module.exports = HelloWorld;