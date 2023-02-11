import express from 'express';
import * as Express from 'express';
import morgan from 'morgan';
import serveFavicon from 'serve-favicon';
import { PrismaClient } from "@prisma/client"
import prisma from './prisma';

const server = express();
const port = 8080;

server.get('/Beer', (req, res) => {
    res.send(prisma.beer); 
});

server.listen(port, () => {
    console.log('Server listening on http://localhost:8080/')
});
