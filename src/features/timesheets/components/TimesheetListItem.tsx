import { Button, Card, Elevation } from '@blueprintjs/core';
import { addMinutes, format } from 'date-fns';
import React from 'react';
import { Timesheet } from '../store';

interface IProps {
    timesheet: Timesheet;
    deleteById: (id: string) => void;
    editTimesheet: (id:string) => void;
}

export class TimesheetListItem extends React.Component<IProps> {
    
    constructor(props) {
        super(props);
        
        this.deleteTimesheet = this.deleteTimesheet.bind(this);
    }
    
    public deleteTimesheet = () =>
        this.props.deleteById(this.props.timesheet.id);
        
    public editTimesheet = () =>
        this.props.editTimesheet(this.props.timesheet.id);
    
    public render() {
        const { timesheet: { startDate, description, id, duration } } = this.props;
        const endDate = addMinutes(startDate, duration);
        return (
            <React.Fragment>
                <Card
                    key={id}
                    elevation={Elevation.THREE}
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '0.5rem',
                    }}
                >
                    <p style={{ fontWeight: 'bold' }}>
                        { format(startDate, 'DD. MM. YYYY') } - { description } : 
                    </p>
                    <p>
                        { format(startDate, 'HH:mm') } - { format(endDate, 'HH:mm') }
                    </p>
                    <Button intent="primary" onClick={this.editTimesheet}>X</Button>
                    <Button intent="danger" onClick={this.deleteTimesheet}>X</Button>
                </Card>    
            </React.Fragment>
        )
    }
}
