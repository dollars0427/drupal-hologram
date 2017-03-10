import React from 'react';
import ReactDOM from 'react-dom';
import PreviewCom from './components/Preview';

window.hologram = function (element, option) {
  ReactDOM.render(
    <div>
        <PreviewCom {... option}/>
    </div>,
    element
  );
}
