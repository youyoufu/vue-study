export interface Channel {
  id: number;
  name: string;
}

export interface Date {
  start: string;
  end: string;
  value: string;
  name: string;
}

export interface Filter {
  dates: Date[];
  channels: Channel[];
}
