import { Router } from 'express';
import { getByIDGestor, getByIDCliente, createDocumento } from '../services/documentoService.js';
const controller = Router()
import Documento from "../models/Documento.js";

controller.get('', async(req, res) => {
    const documentos = await getByIDGestor(req.idg)
    return res.status(200).json(documentos)
})

controller.get('', async(req, res) => {
    const documentos = await getByIDCliente(req.idc)
    return res.status(200).json(documentos)
})

controller.create('', async(req, res) => {
    let documento = new Documento()
    documento.archivo = req.archivo
    documento.nombre = req.nombre
    documento.idTramite = req.idt
    documento.rutaArchivo = req.ruta
    await createDocumento(documento)
    return res.status(200).json(documento)
})