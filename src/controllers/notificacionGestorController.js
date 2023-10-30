import { Router } from 'express';
import { getByIdCliente} from '../services/notificacionService.js';
const controller = Router()
import Notificacion from "../models/Notificacion.js";

controller.get('', async(req, res) => {
    const peticiones = await getByIdCliente(req.body.id)
    return res.status(200).json(peticiones)
})

export default controller;