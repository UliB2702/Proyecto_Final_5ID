import { Router } from 'express';
import { getByIDGestor, getByIDCliente, getTipo } from '../services/tramiteService.js';
const controller = Router()
import Tramite from "../models/Tramite.js";

controller.get('', async(req, res) => {
    const tramite = await getByIDGestor(req.body.id)
    return res.status(200).json(tramite)
})

controller.get('', async(req, res) => {
    const tramite = await getByIDCliente(req.body.id)
    return res.status(200).json(tramite)
})

controller.create('', async(req, res) => {
    let tramite = new Tramite()
    tramite.idGestor = req.body.idg
    tramite.idCliente = req.body.idc
    tramite.idPais = req.body.idp
    tramite.nombre = req.body.nombre
    tramite.descripción = req.body.desc
    tramite.idTipoTramite = req.body.idTipo
    await createDocumento(tramite)
    return res.status(201).json(tramite)
})