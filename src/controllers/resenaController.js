import { Router } from 'express';
import { createReseña, getByIDGestor } from '../services/resenaService.js';
const controller = Router()
import Resena from "../models/Resena.js";

controller.get('/:id', async(req, res) => {
    let id = req.params.id
    const resenas = await getByIDGestor(id)
    return res.status(200).json(resenas)
})

controller.post('', async(req, res) => {
    let resena = new Resena()
    resena.idCliente = req.body.idc
    resena.idGestor = req.body.idg
    resena.cantEstrellas = req.body.cantEstrellas
    resena.texto = req.body.texto
    await createReseña(resena)
    return res.status(200).json(resena)
})

export default controller;