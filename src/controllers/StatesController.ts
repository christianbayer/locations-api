import { NextFunction, Request, Response } from 'express';
import { Country, State } from '../types';
import json from '../data/countries.json';

export class StatesController {
  static async list (req: Request, res: Response, next: NextFunction) {
    /*
      #swagger.description = 'List of all states of the given country'
      #swagger.parameters['countryCode'] = {
        in: 'path',
        description: 'ISO2 Country Code',
        required: true,
        type: 'string',
        schema: 'BR'
      }
    */

    let country: Country | undefined = (json as Country[]).find(country => country.code_iso2 === req.params.countryCode.toUpperCase());
    if (! country) {
      /*
        #swagger.responses[404] = {
          description: 'Not found',
          schema: {
            "error": "Country not found"
          }
        }
      */
      return res.status(404).json({ error: 'Country not found' });
    }

    if (! country.states) {
      country.states = [];
    }

    let states: State[] = country.states.map(state => {
      delete state.cities;

      return state;
    });

    /*
      #swagger.responses[200] = {
        description: 'List of states',
        schema: [
          {
            "name": "Rio Grande do Sul",
            "code": "RS"
          }
        ]
      }
    */
    return res.json(states);
  }
}
