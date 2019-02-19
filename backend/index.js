import express from 'express';
import bodyParser from 'body-parser';

import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('The API is working'));

app.use('/api/v1/meals', mealRoutes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
