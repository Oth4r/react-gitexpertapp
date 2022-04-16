import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const rootElement =document.getElementById('root');
ReactDOMClient.createRoot(rootElement)
    .render(<GifExpertApp />);

