
import { BrowserRouter } from 'react-router-dom';
import '../public/styles/App.css'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <div className="2xl:w-[1290px] flex flex-col items-center">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
