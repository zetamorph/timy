export interface ITimesheetsState {
  readonly errors: string;
  readonly data: { [id: string]: Timesheet };
  readonly loading: boolean;
}

export class Timesheet {
  public id: string;
  public start: Date;
  public duration: number;
  public description: string;
}
