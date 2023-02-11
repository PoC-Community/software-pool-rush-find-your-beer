import express from 'express';
import {Express} from "express";
import morgan from "morgan";
import serveFavicon from 'serve-favicon';

const server = express();
const port = 8080;

server.listen(port, () => {
    console.log('Server listening on http://localhost:8080/')
});
