
import { Suspense, useEffect } from 'react';
import { BrowserRouter, redirect, Routes, Route } from 'react-router-dom';

import '../public/styles/App.css'
import { useStateContext } from './context/ContextProvider';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import PageLoader from './components/Loaders/PageLoader';

function App() {
  const { loginStatus } = useStateContext();

  useEffect(() => {
    !loginStatus && !localStorage.getItem("isLogged") ?
      redirect('/login') :
      redirect('/index')
  })


  return (
    <BrowserRouter>
      <div className="2xl:w-[1290px] flex flex-col items-center">
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<PageLoader />}>
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path='/login'
            element={
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
