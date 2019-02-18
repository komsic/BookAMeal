import express from 'express';

const app = express();
const PORT = 9001;

app.get('/', (req, res) => res.send('The API is working'));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
