import { Router } from 'express';
import { getById, createGestor, getByParams } from '../services/gestorService.js';
const controller = Router()
import Gestor from "../models/Gestor.js";

controller.get('', async(req, res) => {
    const gestor = await getById(req.id)
    return res.status(200).json(gestor)
})

controller.get('', async(req, res) => {
    const gestor = await getByParams(req.email, req.psw)
    return res.status(200).json(gestor)
})

controller.create('', async(req, res) => {
    let gestor = new Gestor()
    gestor.nombre = req.nombre
    gestor.descripción = req.desc
    gestor.dni = req.dni
    gestor.email = req.email
    gestor.contraseña = req.psw
    gestor.fotoPerfil = req.foto
    await createGestor(gestor) 
    return res.status(201).json(gestor)
})
