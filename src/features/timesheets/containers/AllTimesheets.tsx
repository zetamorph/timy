import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { TimesheetList } from '../components/TimesheetList';
import { timesheetActions } from '../store';
import { timesheetsSelector } from '../store/selectors';

const mapDispatchToProps = {
    deleteTimesheet: (id: string) => timesheetActions.deleteById(id),
    editTimesheet: (id: string) => timesheetActions.setCurrentTimesheet(id),
};

const mapStateToProps = (state: IAppState) => ({
    timesheets: timesheetsSelector(state),
});

export const AllTimesheets = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimesheetList);