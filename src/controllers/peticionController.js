import { Router } from 'express';
import { getByIDGestor, deleteById, createPeticion } from '../services/peticionService.js';
const controller = Router()
import Peticion from "../models/Peticion.js";

controller.get('/:id', async(req, res) => {
    const peticiones = await getByIDGestor(req.params.id)
    return res.status(200).json(peticiones)
})

controller.delete('', async(req,res) => {
    await deleteById(req.body.id)
    return res.status(200)
})

controller.post('',  async(req,res) => {
    console.log("LLEGA AQUI")
    let peticion = new Peticion()
    peticion.idGestor = req.body.idg
    peticion.idCliente = req.body.idc
    peticion.mensaje = 'Tienes una nueva peticion!'
    peticion.descripcion = req.body.desc
    await createPeticion(peticion)
    return res.status(200).json(peticion)
})

export default controller;