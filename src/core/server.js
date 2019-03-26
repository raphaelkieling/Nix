import express from 'express';
import http from 'http';

// Middlewares
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/github', express.static(__dirname + '/../../node_modules/github-markdown-css'));

export default {
    http: httpServer,
    app
}