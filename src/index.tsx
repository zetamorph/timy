import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './store';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { TimesheetPage } from './features/timesheets';

const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={TimesheetPage}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
