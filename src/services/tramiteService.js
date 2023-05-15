import Gestor from "../models/Tramite.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Tramite WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}