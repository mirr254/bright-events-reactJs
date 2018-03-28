import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render( 
         <Provider> 
             <App /> 
         
         </Provider>,
          document.getElementById('root'));
registerServiceWorker();
