import Gestor from "../models/Peticion.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Peticion WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const deleteById = async (id) => {
    const conn = await sql.connect(configDB)
    await conn.request().input("whereCondition", id).query('DELETE FROM Peticion WHERE Id = @whereCondition')
}