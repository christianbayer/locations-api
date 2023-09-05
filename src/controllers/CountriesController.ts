import { NextFunction, Request, Response } from 'express';
import { Country } from '../types';
import json from '../data/countries.json';

export class CountriesController {
  static async list (req: Request, res: Response, next: NextFunction) {
    // #swagger.description = 'List of all countries in the world'

    let countries: Country[] = (json as Country[]).map(country => {
      delete country.states;

      return country;
    });


    /*
      #swagger.responses[200] = {
        description: 'List of countries',
        schema: [
          {
            "name": "Brazil",
            "code_iso3": "BRA",
            "code_iso2": "BR",
            "continent": "SA",
            "currency": "BRL",
            "unicode": "🇧🇷",
            "latitude": -10,
            "longitude":-55
          }
        ]
      }
    */
    return res.json(countries);
  }
}
