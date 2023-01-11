
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../public/styles/App.css'
import { useStateContext } from './context/ContextProvider';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import PageLoader from './components/Loaders/PageLoader';
import IndexPage from './IndexPage';
import { mainRoutesDirection } from './admin/routes/mainRoutes.routes';
import { ToastContainer } from 'react-toastify';
import Paie from './admin/screens/Paie';
import { paieRoutes } from './admin/routes/paie.routes';

function App() {
  const { loginStatus } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<PageLoader />}>
                {<LandingPage />}
              </Suspense>
            }
          />
          <Route
            path='/login'
            element={
              <Suspense fallback={<PageLoader />}>
                {!loginStatus && !localStorage.getItem("isLogged") ? <Login /> : <Navigate replace to='/index' />}
              </Suspense>
            }
          />
          <Route
            path='/index'
            element={
              <Suspense fallback={<PageLoader />}>
                {loginStatus || localStorage.getItem("isLogged") ? <IndexPage /> : <Navigate replace to='/login' />}
              </Suspense>
            }
          >
            {
              mainRoutesDirection.map(({ path, element }) =>
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={<PageLoader />}>
                      {element}
                    </Suspense>
                  }
                />
              )
            }
            <Route
              path='/index/paie'
              element={
                <Suspense fallback={<PageLoader />}>
                  <Paie />
                </Suspense>
              }
            >
              {
                paieRoutes.map(({ path, element }) =>
                  <Route
                    key={path}
                    path={path}
                    element={element}
                  />
                )
              }
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
