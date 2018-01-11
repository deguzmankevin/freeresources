const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Commonlit', 'https://www.commonlit.org/', 'Read a book for free with supplemental material!'],
  ['Crash Course', 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb'],
  ['SparkNotes', 'http://www.sparknotes.com/', 'A great site with analysis of characters, chapters and more, to SUPPLEMENT your readings :)'], 
  ['Thug Notes', 'http://www.wisecrack.co/thug-notes/', 'A fun and entertaining way to get the gist of a book!']
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
const English = function() {
  return (
    <div style={divStyle}>
      <h1>English</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

           <Link to='/'><p style={endStyle}>Go home</p></Link>
    </div>
  );
}

module.exports = English;