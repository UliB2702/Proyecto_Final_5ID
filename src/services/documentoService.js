import Documento from "../models/Documento.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Documento WHERE IdTramite = @whereCondition')
    console.log(results)
    return results;
}