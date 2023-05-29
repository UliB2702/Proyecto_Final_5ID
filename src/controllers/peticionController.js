import { Router } from 'express';
import { getByIDGestor, deleteById, createPeticion } from '../services/peticionService.js';
const controller = Router()
import Peticion from "../models/Peticion.js";

controller.get('', async(req, res) => {
    const peticiones = await getByIDGestor(req.body.id)
    return res.status(200).json(peticiones)
})

controller.delete('', async(req,res) => {
    await deleteById(req.body.id)
    return res.status(200)
})

controller.post('',  async(req,res) => {
    let documento = new Documento()
    documento.idGestor = req.body.idg
    documento.idCliente = req.body.idc
    documento.descripcion = req.body.desc
    await createPeticion(documento)
    return res.status(200).json(documento)
})

export default controller;