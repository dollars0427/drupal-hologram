import React from 'react';
import ReactDOM from 'react-dom';
import GalleryCom from './components/Gallery';

window.hologram = function (element, option) {
  ReactDOM.render(
    <div>
        <GalleryCom {... option}/>
    </div>,
    element
  );
}
