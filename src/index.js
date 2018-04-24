import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes'

render( 
         <Provider> 
             <App /> 
         
         </Provider>,
          document.getElementById('root'));
registerServiceWorker();
