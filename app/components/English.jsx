const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Commonlit', 'https://www.commonlit.org/'],
  ['Crash Course', 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb'],
  ['SparkNotes', 'http://www.sparknotes.com/'], 
  ['Thug Notes', 'http://www.wisecrack.co/thug-notes/']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
/* the main page for the about route of this app */
const English = function() {
  return (
    <div style={divStyle}>
      <h1>English</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = English;