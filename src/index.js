import React from 'react';
import reactDom from 'react-dom';
import './index.css';

import App from './App.js'

reactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);