import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

const App = lazy(() => import('./App'));
import '../public/styles/index.css';
import { ContextProvider } from './context/ContextProvider'
import PageLoader from './components/Loaders/PageLoader';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
