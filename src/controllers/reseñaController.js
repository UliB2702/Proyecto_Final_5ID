import { Router } from 'express';
import { getByIDGestor } from '../services/reseñaService.js';
const controller = Router()

controller.get('', async(req, res) => {
    const reseñas = await getByIDGestor(req.id)
    return res.status(200).json(reseñas)
})