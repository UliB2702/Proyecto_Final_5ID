import { Router } from 'express';
import { createEtiqueta, getById} from '../services/etiquetaService.js';
const controller = Router()
import Etiqueta from "../models/Etiqueta.js";


controller.get('', async(req, res) => {
    const etiqueta = await getById(req.id)
    return res.status(200).json(etiqueta)
})

controller.create('', async(req, res) => {
    await createEtiqueta(req.nombre)
    return res.status(200).json(req.nombre)
})
