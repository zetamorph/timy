import React from 'react';
import { AddTimesheet } from './containers/AddTimesheet';
import { RecentTimesheets } from './containers/RecentTimesheets';

export const TimesheetsPage = () => (
    <React.Fragment>
        <div style={{
            display: 'flex',
        }}>
            <RecentTimesheets />
            <br />
            <AddTimesheet />
        </div>
    </React.Fragment>
);
