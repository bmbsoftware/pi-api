import express from 'express';
import bodyParser from 'body-parser';
import appRouter from 'routes/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
const router = express.Router();

appRouter(router);

app.use('/api', router);

export default app;
