import React from 'react';
import {HashRouter} from'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { hotjar } from 'react-hotjar';



function RenderApp()
{
  document.title = "Teknologic"
  const history = createBrowserHistory();
  // Initialize google analytics page view tracking
  history.listen(location => {
  ReactGA.initialize('UA-179396279-1');
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  let hjid=2019848
  hotjar.initialize(hjid);
  return(
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  )
}

ReactDOM.render(
  <RenderApp />,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
