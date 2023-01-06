
import { useEffect } from 'react';
import { BrowserRouter, redirect, Routes, Route } from 'react-router-dom';

import '../public/styles/App.css'
import { useStateContext } from './context/ContextProvider';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';

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
        {/* {
          !loginStatus && !localStorage.getItem("isLogged") ?
            <Routes>
              <Route
                path='/' element={<LandingPage />}
              />
            </Routes> :
            redirect('/login')
        } */}
        <Routes>
          <Route
            path='/' element={<LandingPage />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
