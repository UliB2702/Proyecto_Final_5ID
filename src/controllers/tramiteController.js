import { Router } from 'express';
import { getByIDGestor, getByIDCliente, createTramite, getByID } from '../services/tramiteService.js';
const controller = Router()
import Tramite from "../models/Tramite.js";

controller.get('', async(req, res) => {
    let id = req.query.idg
    const tramite = await getByIDGestor(id)
    return res.status(200).json(tramite)
})

controller.get('/detalle/:idt', async(req, res) => {
    let id = req.params.idt
    const tramite = await getByID(id)
    return res.status(200).json(tramite)
})

controller.get('/:idc', async(req, res) => {
    const idc = req.params.idc
    const tramite = await getByIDCliente(idc)
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
    tramite.imagen = req.body.imagen
    await createTramite(tramite)
    return res.status(201).json(tramite)
})

export default controller;

