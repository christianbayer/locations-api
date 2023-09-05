import { State } from './State';

export type Country = {
  name: string,
  code_iso3: string,
  code_iso2: string,
  continent?: string,
  currency?: string,
  unicode?: string,
  latitude: number,
  longitude: number,
  states?: State[],
};
