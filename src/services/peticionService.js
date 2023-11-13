import Gestor from "../models/Peticion.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Peticion WHERE IdGestor = @whereCondition')
    console.log(results)
    return results.recordsets[0];
}

export const createPeticion = async (peticion) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("pIdGestor", peticion.idGestor)
    .input("pIdCliente", peticion.idCliente)
    .input("pMensaje", peticion.mensaje)
    .input("pDesc", peticion.descripcion)
    .query('INSERT INTO Peticion (IdGestor, IdCliente, Mensaje ,Descripcion) VALUES (@pIdGestor ,@pIdCliente, @pMensaje , @pDesc)')
    console.log(results)
    return results;
}

export const deleteById = async (id) => {
    const conn = await sql.connect(configDB)
    const result = await conn.request()
    .input("whereCondition", id)
    .query('DELETE FROM Peticion WHERE Peticion.Id = @whereCondition')
}