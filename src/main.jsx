import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import './styles/bootstrap-custom.scss';
import './styles/custom-styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
