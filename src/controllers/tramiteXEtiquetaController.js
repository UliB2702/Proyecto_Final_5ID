import { Router } from 'express';
import { getByID, createUnion } from '../services/tramiteXEtiquetaService.js';
import TramiteXEtiqueta from "../models/TramiteXEtiqueta.js";
const controller = Router()

controller.get('', async(req, res) => {
    const union = await getByID(req.body.id)
    return res.status(200).json(union)
})

controller.post('', async(req, res) =>{
    let union = new TramiteXEtiqueta()
    union.idTramite = req.body.idT
    union.idEtiqueta = req.body.idE
    union.observaciones = req.body.o
    union.fechaActualizacion = req.body.f
    await createUnion(union)
    return res.status(201).json(union)
})

export default controller;