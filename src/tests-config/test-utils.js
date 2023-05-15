import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Router } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { render as rtlRender } from '@testing-library/react'
import { store as myStore } from '../app/store';
import triviaReducer from '../features/trivia/triviaSlice'


function render(
  ui,
  { 
    wrapper,
    preloadedState, 
    store = configureStore({ reducer: { trivia: triviaReducer }}), 
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const history = createMemoryHistory();

    return (
      <Provider store={store}>
        <Suspense>
          <Router location={history.location} navigator={history}>
            {children}
          </Router>
        </Suspense>
      </Provider>
    )
  }
  
  return rtlRender(ui, { wrapper: wrapper || Wrapper, root: 'concurrent', ...renderOptions })
}

export * from '@testing-library/react'
export { render }
