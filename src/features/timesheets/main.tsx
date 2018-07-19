import * as React from 'react';
import { withState as TimesheetsForm } from './components/TimesheetsForm';
import { withState as TimesheetsList } from './components/TimesheetsList';

export const TimesheetsPage = () => (
    <React.Fragment>
        <div style={{
            display: 'flex',
        }}>
            <TimesheetsList />
            <br />
            <TimesheetsForm />
        </div>
    </React.Fragment>
);
