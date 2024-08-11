import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './components/context/AuthProvider.js'
import { SocketProvider } from './components/context/SocketContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
  <SocketProvider>
      <App />
  </SocketProvider>
  
  </AuthProvider>
);

