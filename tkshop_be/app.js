import userRoutes from './src/frameworks-drivers/express/user.routes.js';
import authRoutes from './src/frameworks-drivers/express/auth.routes.js';
import productRoutes from './src/frameworks-drivers/express/product.routes.js';
import brandRoutes from './src/frameworks-drivers/express/brand.routes.js';
import categoryRoutes from './src/frameworks-drivers/express/category.routes.js';
import cartRoutes from './src/frameworks-drivers/express/cart.router.js';


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
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/brand', brandRoutes);
app.use('/category', categoryRoutes);
app.use('/auth', authRoutes);



app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, '0.0.0.0', () => console.log(`listening on port ${process.env.PORT}`));



// test catch 404 and forward to error handler
app.use(errorMiddelware.notFound);
app.use(errorMiddelware.errorHandler);

export default app;