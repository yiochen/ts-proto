

export interface Simple {
  name: string;
  state: StateEnum;
}

export enum StateEnum {
  UNKNOWN = "UNKNOWN",
  ON = "ON",
  OFF = "OFF",
  UNRECOGNIZED = "UNRECOGNIZED",
}
