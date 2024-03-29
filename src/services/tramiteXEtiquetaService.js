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
    .query('INSERT INTO TramiteXEtiqueta (IdTramite, IdEtiqueta, Observaciones) VALUES (@uIdT, @uIdE, @observaciones)')
    console.log(results)
    console.log("LLEGO A CREACION DE ESTADO")
    return results.recordsets;
}