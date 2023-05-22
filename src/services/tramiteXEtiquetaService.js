import TramiteXEtiqueta from "../models/TramiteXEtiqueta.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByID = async (idTramite, idEtiqueta) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", idTramite).input("whereCondition2", idEtiqueta).query('SELECT * FROM TramiteXEtiqueta WHERE IdTramite = @whereCondition AND idEtiqueta = @whereCondition2')
    console.log(results)
    return results;
}

export const createUnion = async (union) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("uIdT", union.idTramite)
    .input("uIdE", union.idEtiqueta)
    .input("observaciones", union.observaciones)
    .input("fecha", union.fechaActualizacion)
    .query('INSERT INTO TramiteXEtiqueta (IdTramite, IdEtiqueta, Observaciones, FechaActualizacion) VALUES (@uIdT, @uIdE, @observaciones, @fecha)')
    console.log(results)
    return results;
}