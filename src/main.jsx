import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
console.log("App is being rendered");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/final-web-app-SC310006/'>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
