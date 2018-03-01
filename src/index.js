import React from 'react';
import App from 'containers/App';

React.render(<App />, window.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}