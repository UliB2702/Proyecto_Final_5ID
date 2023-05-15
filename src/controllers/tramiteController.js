import { Router } from 'express';
import { getByIDGestor } from '../services/tramiteService.js';
const controller = Router()

controller.get('', async(req, res) => {
    const tramite = await getByIDGestor(req.id)
    return res.status(200).json(tramite)
})