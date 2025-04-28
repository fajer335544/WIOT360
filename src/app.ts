import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import operationRoutes from './Routes/operation.routes';  
import vehicleTypeRoutes from './Routes/vehicleType.routes';
import scheduleRoutes from './Routes/schedule.routes' ;
require('dotenv').config();
const app = express();

// Middlewares
 
app.use(bodyParser.json());  

//  Routes
app.use('/api/operations', operationRoutes);  


app.use('/api/vehicle-types', vehicleTypeRoutes);
app.use('/api/schedule', scheduleRoutes);

// error handler 
app.use('/',( req: Request, res: Response, next: NextFunction) => {
 
  res.status(200).send('server running smothly!');
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
