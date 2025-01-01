import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses this
import Example from './components/Example';

// Ensure that the element exists before trying to render into it
const rootElement = document.getElementById('example');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root for React 18
    root.render(<Example />);
}
