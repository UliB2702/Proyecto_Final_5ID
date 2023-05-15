import { Router } from 'express';
import { getByIDGestor } from '../services/documentoService.js';
const controller = Router()

controller.get('', async(req, res) => {
    const documentos = await getByIDGestor(req.id)
    return res.status(200).json(documentos)
})

