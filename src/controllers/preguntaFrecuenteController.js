import { Router } from 'express';
import { getByIdGestor} from '../services/preguntaFrecuenteService.js';
const controller = Router()
import PreguntaFrecuente from "../models/PreguntaFrecuente.js";

controller.get('/:id', async(req, res) => {
    console.log("Entro a preguntas precuentes", req.params.id)
    const preguntas = await getByIdGestor(req.params.id)
    return res.status(200).json(preguntas)
})

export default controller;