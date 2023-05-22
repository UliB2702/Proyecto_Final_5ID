import Etiqueta from "../models/Etiqueta.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getById = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Etiqueta WHERE Id = @whereCondition')
    console.log(results)
    return results;
}

export const getAll = async () => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().query('SELECT * FROM Etiqueta')
    console.log(results)
    return results;
}

export const createEtiqueta = async (nombre) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("eNombre", nombre)
    .query('INSERT INTO Etiqueta (Nombre) VALUES (@eNombre)')
    console.log(results)
    return results;
}