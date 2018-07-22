import React from 'react';

interface IProps {
    test: any;
}

export class TimesheetListFilter extends React.Component<IProps, {}> {
    public test = () =>  {
        console.log('hi');
    }
}
