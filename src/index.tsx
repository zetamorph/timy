import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TimesheetsPage } from './features/timesheets';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './store';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

render(
  <Provider store={store}>
    <TimesheetsPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
