import { Router, Request, Response } from 'express';
import {requireAuth} from './auth';

const safeRouter = Router();

safeRouter.get('/safe', requireAuth, (req: Request, res: Response) => {
   
    res.send(`
       <div>
             Sensitive Data here!
          </div>
      `);
  }  
  );

export  { safeRouter } 

 