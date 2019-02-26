import express from 'express';

// Middlewares
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//routes
import RouteManager from './routeManager';

export default {
    instance: app,
    initRouter: ()=> app.use(RouteManager.routes())
};