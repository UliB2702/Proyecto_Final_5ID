import { Router } from 'express';
import { getById } from '../services/gestorService.js';
const controller = Router()

controller.get('', async(req, res) => {
    const gestor = await getById(req.id)
    return res.status(200).json(personaje)
})

