import { NextFunction, Request, Response } from 'express';
import { Country, State } from '../types';
import json from '../data/countries.json';

export class CitiesController {
  static async list (req: Request, res: Response, next: NextFunction) {
    /*
      #swagger.description = 'List of all cities of the given state'
      #swagger.parameters['countryCode'] = {
        in: 'path',
        description: 'ISO2 Country Code',
        required: true,
        type: 'string',
        schema: 'BR'
      }
      #swagger.parameters['stateCode'] = {
        in: 'path',
        description: 'State Code',
        required: true,
        type: 'string',
        schema: 'RS'
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
      return res.status(404).json({ error: 'Country not found.' });
    }

    let state: State | undefined = country.states?.find(state => state.code === req.params.stateCode.toUpperCase());
    if (! state) {
      /*
        #swagger.responses[404] = {
          description: 'Not found',
          schema: {
            "error": "State not found"
          }
        }
      */
      return res.status(404).json({ error: 'State not found.' });
    }

    if (! state.cities) {
      state.cities = [];
    }

    state.cities.sort((a, b) => a.name.localeCompare(b.name));

    /*
      #swagger.responses[200] = {
        description: 'List of cities',
        schema: [
          {
            "name": "Lajeado",
            "latitude": "-29.46694000",
            "longitude": "-51.96139000"
          }
        ]
      }
    */
    return res.json(state.cities);
  }
}
