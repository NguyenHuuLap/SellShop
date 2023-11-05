import userRoutes from './src/frameworks-drivers/express/user.routes.js';
import authRoutes from './src/frameworks-drivers/express/auth.routes.js';
import express from 'express';
import connectDB from './src/data-access/mongodb_connector.js';
import cors from 'cors';
import errorMiddelware from './src/interface-adapters/middleware/error.middelware.js';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config({ path: './src/config.env' })
connectDB();

var app = express();

app.use(passport.initialize());
  

app.use(express.json());
app.use(cors());



app.use('/user', userRoutes);
app.use('/auth', authRoutes);


app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, '0.0.0.0', () => console.log(`listening on port ${process.env.PORT}`));



// test catch 404 and forward to error handler
app.use(errorMiddelware.notFound);
app.use(errorMiddelware.errorHandler);

export default app;