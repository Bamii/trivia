import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

// route paths
const Home = lazy(() => import('./pages/Home'))
const Game = lazy(() => import('./pages/Game'))
const routes = [
  { path: '/', element: <Home /> },
  { path: '/game', element: <Game /> }
]

function App() {
  return (
    <div className="max-w-screen-md h-screen flex p-5 m-auto">
      <Routes>
        {routes.map((props, key) =>
          <Route
            key={key}
            {...props}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
