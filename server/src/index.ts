import express from 'express';

import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { loginRouter } from './routes/login-router';
import { safeRouter } from './routes/safe-router';

class Server {
  app: express.Express = express();
  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['3232323232'] }));
    this.app.use(loginRouter);
    this.app.use(safeRouter);
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Server is running');
    });
  }
}

new Server().start();
