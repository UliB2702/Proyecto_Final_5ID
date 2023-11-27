import { Router } from 'express';
import { getByIDGestor, getByIDCliente, createTramite, getByID, updateTramite } from '../services/tramiteService.js';
const controller = Router()
import Tramite from "../models/Tramite.js";
import { createUnion } from '../services/tramiteXEtiquetaService.js';
import TramiteXEtiqueta from "../models/TramiteXEtiqueta.js"

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

controller.put('/actualizar', async(req, res) =>{
    let tramite = new Tramite()
    tramite.id = req.body.idt
    tramite.nombre = req.body.nombre
    tramite.descripción = req.body.desc
    tramite.idPais = req.body.idp
    tramite.imagen = req.body.imagen
    await updateTramite(tramite)
    let estado = new TramiteXEtiqueta()
    estado.idTramite = req.body.idt
    estado.idEtiqueta = req.body.idE
    estado.observaciones = req.body.obs
    await createUnion(estado)
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

