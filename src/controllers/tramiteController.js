import { Router } from 'express';
import { getByIDGestor, getByIDCliente, createTramite } from '../services/tramiteService.js';
const controller = Router()
import Tramite from "../models/Tramite.js";

controller.get('/:idg', async(req, res) => {
    let id = req.params.idg
    const tramite = await getByIDGestor(id)
    return res.status(200).json(tramite)
})

controller.get('', async(req, res) => {
    const tramite = await getByIDCliente(req.body.idc)
    return res.status(200).json(tramite)
})

controller.post('', async(req, res) => {
    let tramite = new Tramite()
    tramite.idGestor = req.body.idg
    tramite.idCliente = req.body.idc
    tramite.idPais = req.body.idp
    tramite.nombre = req.body.nombre
    tramite.descripción = req.body.desc
    tramite.idTipoTramite = req.body.idTipo
    await createTramite(tramite)
    return res.status(201).json(tramite)
})

export default controller;