import { Router, Request, Response } from 'express';
import calculateAlgorithmsRouter from './routes/CalculateAlgorithms.router';

const routes: Router = Router();

// Activate for requests to http://localhost:8000/api
routes.get('/', (req: Request, res: Response) => {
  res.send('Welcome to tech test to yopidoya')
})

routes.use('/calculate', calculateAlgorithmsRouter)

export default routes;

