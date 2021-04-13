import * as Express from 'express';

export const orangesGet = (req: Express.Request, res: Express.Response): void => {
  res.send({ message: 'oranges' });
};
