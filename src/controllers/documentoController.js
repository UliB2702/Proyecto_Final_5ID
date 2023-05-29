import { Router } from 'express';
import { getByIDTramite, createDocumento } from '../services/documentoService.js';
const controller = Router()
import Documento from "../models/Documento.js";

controller.get('', async(req, res) => {
    const documentos = await getByIDTramite(req.body.id)
    return res.status(200).json(documentos)
})

controller.post('', async(req, res) => {
    let documento = new Documento()
    documento.archivo = req.body.archivo
    documento.nombre = req.body.nombre
    documento.idTramite = req.body.idt
    documento.rutaArchivo = req.body.ruta
    await createDocumento(documento)
    return res.status(200).json(documento)
})

export default controller;