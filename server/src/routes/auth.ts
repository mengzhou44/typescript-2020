import express, { Request, Response, NextFunction } from 'express';

export function requireAuth(req:Request, res: Response, next: NextFunction) {
  if (req.session && req.session.isLoggedIn) {
      next();
  } else {
      res.status(403).send('Not Permitted')
  }
}