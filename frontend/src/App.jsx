
import { Suspense, useEffect } from 'react';
import { BrowserRouter, redirect, Routes, Route, Navigate } from 'react-router-dom';

import '../public/styles/App.css'
import { useStateContext } from './context/ContextProvider';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import PageLoader from './components/Loaders/PageLoader';
import IndexPage from './IndexPage';

function App() {
  const { loginStatus } = useStateContext();

  return (
    <BrowserRouter>
      <div className="2xl:w-[1290px] flex flex-col items-center">
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
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
