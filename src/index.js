import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingList from './ShoppingList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App name='Svitlana'/>
    <React.Fragment>
      <ShoppingList name='Bowl'/>
      <ShoppingList name='Glass'/>
      <ShoppingList />
    </React.Fragment>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
