import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App.tsx';
import './index.css';
import { store } from './store/index';  // Import your Redux store

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap App in Provider */}
      <App />
    </Provider>
  </StrictMode>
);
