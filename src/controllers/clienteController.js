import { Router } from 'express';
import { getByID, createCliente } from '../services/clienteService.js';
const controller = Router()
import Cliente from "../models/Cliente.js";

controller.get('', async(req, res) => {
    const cliente = await getByID(req.id)
    return res.status(200).json(cliente)
})

controller.get('', async(req, res) => {
    const cliente = await getByParams(req.body.email, req.body.psw)
    return res.status(200).json(cliente)
})

controller.create('', async(req, res) => {
    let cliente = new Cliente()
    cliente.nombre = req.body.nombre
    cliente.dni = req.body.dni
    cliente.email = req.body.email
    cliente.contraseña = req.body.psw
    cliente.fotoPerfil = req.body.foto
    await createCliente(cliente) 
    return res.status(201).json(cliente)
})