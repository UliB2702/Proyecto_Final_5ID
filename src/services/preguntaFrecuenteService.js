import PreguntaFrecuente from "../models/PreguntaFrecuente.js";
import sql from 'mssql'
import configDB from "../models/db.js";


export const getByIdGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM PreguntaFrecuente WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}
