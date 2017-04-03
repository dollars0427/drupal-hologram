import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import PreviewCom from './components/Preview';

window.hologram = function (element, option) {
  ReactDOM.render(
    <div>
        <PreviewCom {... option}/>
    </div>,
    element
  );
}
