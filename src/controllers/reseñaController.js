import { Router } from 'express';
import { createReseña, getByIDGestor } from '../services/reseñaService.js';
const controller = Router()
import Reseña from "../models/Reseña.js";

controller.get('', async(req, res) => {
    const reseñas = await getByIDGestor(req.id)
    return res.status(200).json(reseñas)
})

controller.create('', async(req, res) => {
    let reseña = new Reseña()
    reseña.idCliente = req.idc
    reseña.idGestor = req.idg
    reseña.cantEstrellas = req.cantEstrellas
    reseña.texto = req.texto
    await createReseña(reseña)
    return res.status(200).json(reseña)
})