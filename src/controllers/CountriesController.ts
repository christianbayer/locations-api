import { NextFunction, Request, Response } from 'express';
import { Country } from '../types';
import json from '../data/countries.json';

export class CountriesController {
  static async list (req: Request, res: Response, next: NextFunction) {
    // #swagger.description = 'List of all countries in the world'

    let countries: Country[] = (json as Country[]).map(country => ({
        name: country.name,
        code_iso3: country.code_iso3,
        code_iso2: country.code_iso2,
        continent: country.continent,
        currency: country.currency,
        unicode: country.unicode,
        latitude: country.latitude,
        longitude: country.longitude
    })).sort((a, b) => a.name.localeCompare(b.name));

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
