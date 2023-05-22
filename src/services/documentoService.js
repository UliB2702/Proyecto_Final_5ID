import Documento from "../models/Documento.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Documento WHERE IdTramite = @whereCondition')
    console.log(results)
    return results;
}

export const createDocumento = async (documento) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("dArchivo", documento.archivo)
    .input("dNombre", documento.nombre)
    .input("dTramite", documento.idTramite)
    .input("dRuta", documento.rutaArchivo)
    .query('INSERT INTO Documento (Archivo, Nombre, IdTramite, RutaArchivo) VALUES (@dArchivo, @dNombre, @dTramite, @dRuta)')
    console.log(results)
    return results;
}