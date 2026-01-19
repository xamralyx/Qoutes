import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

// Register service worker for offline support (base-aware)
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  const base = import.meta.env.BASE_URL || '/';
  const swUrl = `${base}src/service-worker.js`;
  navigator.serviceWorker.register(swUrl, { scope: base }).catch(() => {});
}
