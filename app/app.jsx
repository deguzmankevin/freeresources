const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');
const Test = require('./components/Test');
const Math = require('./components/Math');
const Teachers = require('./components/Teachers');
const Students = require('./components/Students');
const CS = require('./components/CS');
const Chemistry = require('./components/Chemistry');
const English = require('./components/English');

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HelloWorld}/>
      <Route path="/about" component={About}/>
      <Route path="/test" component={Test}/>
       <Route path="/math" component={Math}/>
       <Route path="/teachers" component={Teachers}/>
      <Route path="/students" component={Students}/>
      <Route path="/cs" component={CS}/>
      <Route path="/english" component={English}/>
      <Route path="/chemistry" component={Chemistry}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));