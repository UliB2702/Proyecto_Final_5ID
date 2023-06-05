import Gestor from "../models/Gestor.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getById = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Gestor WHERE Id = @whereCondition')
    console.log(results)
    return results;
}

export const createGestor = async(gestor) => {
    const conn = await sql.connect(configDB)
    if(gestor.dni>99999999){
        gestor.dni = 99999999
    }
    else if(gestor.dni<10000000)
    {
        gestor.dni = 10000000
    }
    const results = await conn.request()
    .input("gNombre", gestor.nombre)
    .input("gDesc", gestor.descripción)
    .input("gDni", gestor.dni)
    .input("gEmail", gestor.email)
    .input("gPsw", gestor.contraseña)
    .input("gFoto", gestor.fotoPerfil)
    .query('INSERT INTO Gestor (Nombre, Descripción, Dni, Email, Contraseña, FotoPerfil) VALUES (@gNombre, @gDesc, @gDni, @gEmail, @gPsw, @gFoto)')
    console.log(results)
    return results;
}

export const getByParams = async (email, contraseña) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", email).input("whereCondition2", contraseña).query('SELECT * FROM Gestor WHERE Email = @whereCondition AND Contraseña = @whereCondition2')
    console.log(results)
    return results;
}