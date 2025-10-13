import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const fallback = document.createElement('div');
const err = '🚨 Application root element not found. Please ensure your HTML includes a <div id=\"root\"></div>.';
fallback.textContent = err;

const container = document.getElementById('root') ?? fallback;

createRoot(container).render(
    <StrictMode>
    <App />
    </StrictMode>
);