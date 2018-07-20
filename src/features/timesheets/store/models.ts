export interface ITimesheetsState {
  readonly currentTimesheetId?: string;
  readonly data: { [id: string]: Timesheet };
  readonly errors: string;
  readonly loading: boolean;
}

export class Timesheet {
  public id: string;
  public start: Date;
  public duration: number;
  public description: string;
}
