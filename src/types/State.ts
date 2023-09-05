import { City } from './City';

export type State = {
  name: string,
  code: string,
  cities?: City[],
};
