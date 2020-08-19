import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// render micro frontend function
window.renderApp2 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

// unmount micro frontend function
window.unmountApp2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('app2'));
}