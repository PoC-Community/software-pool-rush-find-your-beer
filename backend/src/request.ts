import prisma from './prisma';
const express = require('express');
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post("/api/question1", (req: Request, res: Response) => {
  const IBU = req.body.IBU;
  const ABV = req.body.ABV;

 console.log('IBU : ', IBU);
  console.log('ABV : ', ABV);
  res.status(200).send({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});