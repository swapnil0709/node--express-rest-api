import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

const PORT = 8000;

app.listen(PORT, () =>
  console.log(
    `Server started on port: ${PORT} access it on http://localhost:${PORT}`
  )
);

//* Routes:

app.get('/', (request, response) => {
  console.log('Hello in the console');
  response.send('Welcome to / Route');
});
