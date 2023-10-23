import { Router } from 'express';
import { getById, createCliente, getByParams } from '../services/clienteService.js';
import { getByParams2 } from '../services/gestorService.js';
const controller = Router()
import Cliente from "../models/Cliente.js";

controller.get('/:id', async(req, res) => {
    let id = req.params.id
    const cliente = await getById(id)
    return res.status(200).json(cliente)
})

controller.post('/sesion', async(req, res) => {
    console.log(req.body.email)
    var cliente = await getByParams(req.body.email, req.body.psw)
    if (cliente.length === 0) {
        cliente = await getByParams2(req.body.email, req.body.psw)
        if (cliente.length === 0) {
        cliente = undefined
        }
      }
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