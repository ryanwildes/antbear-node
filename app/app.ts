import express from 'express';
import morgan from 'morgan';
import ErrorHandler from './exceptions/errorhandler';
import IController from './interfaces/icontroller';

export default class App {
  public app: express.Application;
  public port: number;

  constructor(port: number, controllers: IController[]) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use(morgan('dev'));

    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });

    this.app.use(ErrorHandler);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening at http://localhost:${this.port}`);
    });
  }
}
