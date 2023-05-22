import { Router } from 'express';
import { getByID, createUnion } from '../services/tramiteXEtiquetaService.js';
import TramiteXEtiqueta from "../models/TramiteXEtiqueta.js";
const controller = Router()

controller.get('', async(req, res) => {
    const union = await getByID(req.id)
    return res.status(200).json(union)
})

controller.create('', async(req, res) =>{
    let union = new TramiteXEtiqueta()
    union.idTramite = req.idT
    union.idEtiqueta = req.idE
    union.observaciones = req.o
    union.fechaActualizacion = req.f
    await createUnion(union)
    return res.status(201).json(union)
})