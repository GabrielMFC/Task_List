import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LinhaVermelha from './LinhaVermelha';
import LinhasAzuis from './LinhasAzuis';

const linhas = ReactDOM.createRoot(document.getElementById('linhas'));
linhas.render(
    <>
    <LinhaVermelha />
    <LinhasAzuis />
    </>
);
