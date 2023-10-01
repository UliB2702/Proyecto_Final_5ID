import { Router } from 'express';
import { getByIdGestor} from '../services/preguntaFrecuenteService.js';
const controller = Router()
import Notificacion from "../models/PreguntaFrecuente.js";

controller.get('', async(req, res) => {
    const peticiones = await getByIdGestor(req.body.id)
    return res.status(200).json(peticiones)
})

export default controller;