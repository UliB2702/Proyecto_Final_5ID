import express, { Router } from "express";
import ClienteRouter from "./controllers/clienteController.js";
import GestorRouter from "./controllers/gestorController.js";
import 'dotenv/config';

const app = express();
const port = 5000;


app.use(express.json());