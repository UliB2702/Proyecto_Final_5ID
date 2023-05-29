import { json, Router } from 'express';
import { getByIDGestor, deleteById } from '../services/peticionService.js';
const controller = Router()
import Peticion from "../models/Peticion.js";

controller.get('', async(req, res) => {
    const peticiones = await getByIDGestor(req.body.id)
    return res.status(200).json(peticiones)
})

controller.delete('', async(req,res) => {
    await deleteById(req.body.id)
    return res.status(200)
})