import * as React from 'react';
import { withState as TimesheetsForm } from "./components/TimesheetsForm";
import { withState as TimesheetsList } from './components/TimesheetsList';

export const TimesheetsPage = () => (
    <React.Fragment>
        <h1>All your timesheets</h1>
        <TimesheetsForm />
        <br/>
        <TimesheetsList />
    </React.Fragment>
);
