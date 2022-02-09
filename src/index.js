import React from 'react';
import reactDom from 'react-dom';
import './index.css';

import App from './App.js'
import { BrowserRouter } from 'react-router-dom';

reactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);