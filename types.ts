
export interface RSVPData {
  name: string;
  attending: 'yes' | 'no';
  alcohol: string[];
  food: 'meat' | 'fish';
  allergies: string;
  message?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
