import Gestor from "../models/Gestor.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getById = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Gestor WHERE Id = @whereCondition')
    console.log(results)
    return results;
}