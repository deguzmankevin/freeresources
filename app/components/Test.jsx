const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const Test = function() {
  return (
    <div>
      <h1>Katlin hehe</h1>

      <p>Hi Girly what's up hehehe teehahoo</p>

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Test;