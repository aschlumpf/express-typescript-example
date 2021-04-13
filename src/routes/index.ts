import * as Express from 'express';

import { appleGet, applesGet } from './apples';
import { orangesGet } from './oranges';

export const initRoutes = (app: Express.Application): void => {
  app.get('/apple/:id', appleGet);
  app.get('/apples', applesGet);
  app.get('/oranges', orangesGet);
};
