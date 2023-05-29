import { Router } from 'express';
import { getById, createGestor, getByParams } from '../services/gestorService.js';
const controller = Router()
import Gestor from "../models/Gestor.js";

controller.get('', async(req, res) => {
    const gestor = await getById(req.body.id)
    return res.status(200).json(gestor)
})

controller.get('', async(req, res) => {
    const gestor = await getByParams(req.body.email, req.body.psw)
    return res.status(200).json(gestor)
})

controller.create('', async(req, res) => {
    let gestor = new Gestor()
    gestor.nombre = req.body.nombre
    gestor.descripción = req.body.desc
    gestor.dni = req.body.dni
    gestor.email = req.body.email
    gestor.contraseña = req.body.psw
    gestor.fotoPerfil = req.foto
    await createGestor(gestor) 
    return res.status(201).json(gestor)
})
