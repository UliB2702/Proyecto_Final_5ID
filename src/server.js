import express, { Router } from "express";
import ClienteRouter from "./controllers/clienteController.js";
import GestorRouter from "./controllers/gestorController.js";
import DocumentoRouter from "./controllers/documentoController.js";
import EtiquetaRouter from "./controllers/etiquetaController.js";
import ReseñaRouter from "./controllers/reseñaController.js";
import TramiteRouter from "./controllers/tramiteController.js";
import TramiteXEtiquetaRouter from "./controllers/tramiteXEtiquetaController.js";
import PeticionRouter from "./controllers/peticionController.js";
import 'dotenv/config';

const app = express();
const port = 5000;



app.use(express.json());

app.use("/clientes", ClienteRouter)
app.use("/gestores", GestorRouter)
app.use("/documentos", DocumentoRouter)
app.use("/etiquetas", EtiquetaRouter)
app.use("/reseñas", ReseñaRouter)
app.use("/tramites", TramiteRouter)
app.use("/tramitexetiquetas", TramiteXEtiquetaRouter)
app.use("/peticiones", PeticionRouter)

//Usar Axios y promesas para conectar el React con el Express

app.listen(port, () => {
    console.log(`Se esta usando el puerto: ${port}`)
})