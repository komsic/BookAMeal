import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import userRoutes from './routes/user.route';
import orderRoutes from './routes/order.route';
import validator from './middlewares/validator-middleware';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validator());

app.get('/', (req, res) => res.send('The API is working'));

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/orders', orderRoutes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

export default app;
