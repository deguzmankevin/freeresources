const React = require('react');

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */

const sty = {
  'list-style-type': 'none', 
  'font-size': '30px',
  'text-align': 'center'
}
const pStyle = {
 'font-size': '20px' 
}
const UnorderedList = function({ items }){
  return (
    <ul style={sty}>
  
      {items.map(function(item, i) {
        return <li key={i}><a href={item[1]} target='blank'>{item[0]}</a><p style={pStyle}>{item[2]}</p></li>;
      })} 
    </ul>
  );
}

module.exports = UnorderedList;