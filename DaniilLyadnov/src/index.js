import React, {createElement} from 'react';
import ReactDom from 'react-dom';
import {App} from './components/App'



const mountPoint = document.getElementById('root');
ReactDom.render(<App />, mountPoint);