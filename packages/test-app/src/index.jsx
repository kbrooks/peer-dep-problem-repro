import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import CounterWithProvider from "./CounterWithProvider"; // Ensure this path matches the location of your Counter component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CounterWithProvider />
    </React.StrictMode>
);
