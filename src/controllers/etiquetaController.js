import { Router } from 'express';
import { createEtiqueta, getById} from '../services/etiquetaService.js';
const controller = Router()
import Etiqueta from "../models/Etiqueta.js";


controller.get('', async(req, res) => {
    const etiqueta = await getById(req.body.id)
    return res.status(200).json(etiqueta)
})

controller.create('', async(req, res) => {
    await createEtiqueta(req.body.nombre)
    return res.status(200).json(req.nombre)
})
