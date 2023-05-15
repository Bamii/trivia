import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { LoaderFallback } from './components';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOMClient
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<LoaderFallback />} >
            <App />
          </Suspense>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
