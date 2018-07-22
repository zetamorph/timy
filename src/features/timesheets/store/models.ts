export interface ITimesheetState {
    readonly currentTimesheetId?: string;
    readonly data: ITimesheetData;
    readonly errors: string;
    readonly loading: boolean;
}

export interface ITimesheetData {
    [id: string]: Timesheet;
}

export class Timesheet {
    public id: string;
    public startDate: Date;
    public duration: number;
    public description: string;
}
