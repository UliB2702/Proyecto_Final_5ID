import Gestor from "../models/Peticion.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Peticion WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const createPeticion = async (peticion) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("pIdGestor", peticion.idGestor)
    .input("pIdCliente", peticion.idCliente)
    .input("pDesc", peticion.descripcion)
    .query('INSERT INTO Peticion (IdGestor, IdCliente, Descripcion) VALUES (@pIdGestor, @pIdCliente , @pDesc)')
    console.log(results)
    return results;
}

export const deleteById = async (id) => {
    const conn = await sql.connect(configDB)
    const result = await conn.request()
    .input("whereCondition", id)
    .query('DELETE FROM Peticion WHERE Peticion.Id = @whereCondition')
}