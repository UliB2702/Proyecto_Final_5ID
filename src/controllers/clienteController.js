import { Router } from 'express';
import { getByID, createCliente } from '../services/clienteService.js';
const controller = Router()
import Cliente from "../models/Cliente.js";

controller.get('', async(req, res) => {
    const cliente = await getByID(req.id)
    return res.status(200).json(cliente)
})

controller.get('', async(req, res) => {
    const cliente = await getByParams(req.email, req.psw)
    return res.status(200).json(cliente)
})

controller.create('', async(req, res) => {
    let cliente = new Cliente()
    cliente.nombre = req.nombre
    cliente.dni = req.dni
    cliente.email = req.email
    cliente.contraseña = req.psw
    cliente.fotoPerfil = req.foto
    await createCliente(cliente) 
    return res.status(201).json(cliente)
})