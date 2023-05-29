import { Router } from 'express';
import { createEtiqueta, getAll, getById} from '../services/etiquetaService.js';
const controller = Router()
import Etiqueta from "../models/Etiqueta.js";


controller.get('', async(req, res) => {
    const etiqueta = await getById(req.body.id)
    return res.status(200).json(etiqueta)
})

controller.get('', async(req, res) => {
    const etiqueta = await getAll()
    return res.status(200).json(etiqueta)
})

controller.post('', async(req, res) => {
    await createEtiqueta(req.body.nombre)
    return res.status(200).json(req.body.nombre)
})

export default controller;
