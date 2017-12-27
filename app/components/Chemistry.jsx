const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const resources = [
  ['Bozeman Science', 'http://www.bozemanscience.com/chemistry/'],
  ['Crash Course', 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr'], 
  ['IsaacsTeach', 'https://www.youtube.com/user/IsaacsTEACH']
];

const divStyle = {
  'font-family': 'Alegreya Sans',
  'text-align': 'center'
}
/* the main page for the about route of this app */
const Chemistry = function() {
  return (
    <div style={divStyle}>
      <h1>Chemistry</h1>

      <p>Here are some free resources to use!</p>

      <UnorderedList items={resources} />

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Chemistry;