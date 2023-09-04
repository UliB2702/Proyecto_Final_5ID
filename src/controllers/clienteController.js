import { Router } from 'express';
import { getById, createCliente, getByParams } from '../services/clienteService.js';
const controller = Router()
import Cliente from "../models/Cliente.js";

controller.get('/:id', async(req, res) => {
    let id = req.params.id
    const cliente = await getById(id)
    return res.status(200).json(cliente)
})

controller.get('/', async(req, res) => {
    console.log(req.query.email)
    const cliente = await getByParams(req.query.email, req.query.psw)
    return res.status(200).json(cliente)
})

controller.post('', async(req, res) => {
    let cliente = new Cliente()
    cliente.nombre = req.body.nombre
    cliente.dni = req.body.dni
    cliente.email = req.body.email
    cliente.contraseña = req.body.psw
    cliente.fotoPerfil = req.body.foto
    let completado
    completado = await createCliente(cliente) 
    if(completado == undefined)
    {
        return res.status(400).json(cliente)
    }
    else{
        return res.status(201).json(cliente)
    }
})

export default controller;