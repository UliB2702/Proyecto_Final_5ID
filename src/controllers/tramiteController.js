import { Router } from 'express';
import { getByIDGestor, getByIDCliente, getTipo } from '../services/tramiteService.js';
const controller = Router()
import Tramite from "../models/Tramite.js";

controller.get('', async(req, res) => {
    const tramite = await getByIDGestor(req.id)
    return res.status(200).json(tramite)
})

controller.get('', async(req, res) => {
    const tramite = await getByIDCliente(req.id)
    return res.status(200).json(tramite)
})

controller.create('', async(req, res) => {
    let tramite = new Tramite()
    tramite.idGestor = req.idg
    tramite.idCliente = req.idc
    tramite.idPais = req.idp
    tramite.nombre = req.nombre
    tramite.descripción = req.desc
    tramite.idTipoTramite = req.idTipo
    await createDocumento(tramite)
    return res.status(201).json(tramite)
})