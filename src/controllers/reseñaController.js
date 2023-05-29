import { Router } from 'express';
import { createReseña, getByIDGestor } from '../services/reseñaService.js';
const controller = Router()
import Reseña from "../models/Reseña.js";

controller.get('', async(req, res) => {
    const reseñas = await getByIDGestor(req.body.id)
    return res.status(200).json(reseñas)
})

controller.post('', async(req, res) => {
    let reseña = new Reseña()
    reseña.idCliente = req.body.idc
    reseña.idGestor = req.body.idg
    reseña.cantEstrellas = req.body.cantEstrellas
    reseña.texto = req.body.texto
    await createReseña(reseña)
    return res.status(200).json(reseña)
})

export default controller;