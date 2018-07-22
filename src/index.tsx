import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TimesheetPage } from './features/timesheets';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './store';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const store = createStore(rootReducer, composeWithDevTools());

render(
    <Provider store={store}>
        <TimesheetPage />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
