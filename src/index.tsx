import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { validateEnv } from './utils/validateEnv';

// Validate environment variables before starting the app
try {
  validateEnv();
} catch (err) {
  const error = err as Error;
  console.error('Environment validation failed:', error.message);
  // In development, we'll show the error in the browser
  if (process.env.NODE_ENV === 'development') {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
      <React.StrictMode>
        <div style={{ padding: '20px', color: 'red' }}>
          <h1>Environment Error</h1>
          <p>{error.message}</p>
          <p>Please check your .env file and restart the application.</p>
        </div>
      </React.StrictMode>
    );
  }
  // In production, we'll just log the error
  throw error;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
