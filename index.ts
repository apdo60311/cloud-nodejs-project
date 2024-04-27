import express = require('express');
import { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';

import {getAllStudents} from "./controllers/student.controller"

const SERVER_PORT: number = 3000;

const app: Express = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("interface"));

app.get("/", (request: Request, response: Response) => {
    response.sendFile("/app/interface/index.html");
});
app.get("/students", getAllStudents);


app.listen(SERVER_PORT, () => {
    console.log(`Server running at: http://localhost:${SERVER_PORT}`);
});