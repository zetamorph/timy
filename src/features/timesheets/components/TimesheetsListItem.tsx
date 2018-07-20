import { Button, Card, Elevation } from '@blueprintjs/core';
import * as React from 'react';
import { Timesheet } from '../store';

export class TimesheetsListItem extends React.Component<{ timesheet: Timesheet, deleteById: (id: string) => void }> {
    
    constructor(props) {
        super(props);
        
        this.deleteTimesheet = this.deleteTimesheet.bind(this);
    }
    
    public deleteTimesheet() {
        this.props.deleteById(this.props.timesheet.id);
    }
    
    public render() {
        const { timesheet } = this.props;
        return (
            <React.Fragment>
                <Card
                    key={timesheet.id}
                    elevation={Elevation.THREE}
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '0.5rem',
                    }}
                >
                    <span style={{ fontWeight: 'bold' }}>
                        { timesheet.start.toLocaleString() } : 
                    </span>
                    <span>
                        { timesheet.duration }
                    </span>
                    <Button intent="danger" onClick={this.deleteTimesheet}>X</Button>
                </Card>    
            </React.Fragment>
        )
    }
}
