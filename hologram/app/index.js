import 'core-js/fn/array/find-index';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import previewsReducers from './reducers/';
import PreviewCom from './components/Preview';
import {addFiles} from './actions';

window.hologram = function (element, option) {
   let store = createStore(previewsReducers, {}, applyMiddleware(
      logger
   ));

   ReactDOM.render(
      <div>
         <Provider store={store}>
            <PreviewCom {... option}/>
         </Provider>
      </div>,
      element
   );
   return {
      store,
      addFiles,
   }
}
