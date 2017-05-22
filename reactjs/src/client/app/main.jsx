import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

var mainstyle = {
    margin: '20px'
}

var headstyle = {
    margin: '20px',
    fontSize: '30'
}

// entire application consists of heading and main sections
const App = () => (
  <div>
    <Head></Head>
    <Main />
  </div>
)

const Head = () => (
    <div style={headstyle}>
        Shanko AV Rental
    </div>
)

// switch the contents of the main based on routes
const Main = () => (
<main>
    <Switch>
        <Route exact path="/" component={Screen1}/>
    </Switch>
</main>
)

const Screen1 = () => (
    <div style={mainstyle}>
       We offer a range of audio services for small to medium sized events such as weddings, banquets, and concerts.  Contact Steve at av@janeshanko.com for more details.
    </div>
)

// create the router and put the entire app inside it's scope
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(BrowserRouter, () => {
    const NextApp = require(BrowserRouter).default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}