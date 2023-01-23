
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
import { mainRoutesClient } from './client/routes/mainRoutes.routes';
import NotFound from './pages/404';
import Inventaire from './client/screens/Inventaire';
import Patrimoine from './client/screens/Patrimoine';
import { inventaireRoutes } from './client/routes/inventaire.routes';
import { patrimoineRoutes } from './client/routes/patrimoine.routes';

function App() {
  const { loginStatus } = useStateContext();
  const user = JSON.parse(localStorage.getItem('user'));

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
              user?.agent.privilege === 'direction' && mainRoutesDirection.map(({ path, element }) =>
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

            {
              (user?.agent.privilege === 'standard' ||
                user?.agent.privilege === 'patrimoine' ||
                user?.agent.privilege === 'inventaire') &&
              mainRoutesClient.map(({ path, element }) =>
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
            {user?.agent.privilege === 'direction' && <Route
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
            </Route>}
            {
              user?.agent.privilege === 'inventaire' && <Route
                path='/index/cinventaire'
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Inventaire />
                  </Suspense>
                }
              >
                {
                  inventaireRoutes.map(({ path, element }) =>
                    <Route
                      key={path}
                      path={path}
                      element={element}
                    />
                  )
                }
              </Route>
            }
            {
              user?.agent.privilege === 'patrimoine' && <Route
                path='/index/cpatrimoine'
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Patrimoine />
                  </Suspense>
                }
              >
                {patrimoineRoutes.map(({ path, element }) =>
                  <Route
                    key={path}
                    path={path}
                    element={element}
                  />
                )}
              </Route>
            }
            <Route path='*' element={<NotFound />}>

            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
