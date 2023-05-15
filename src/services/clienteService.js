import Cliente from "../models/Cliente.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getAll = async () => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().query('SELECT * FROM Cliente')
    console.log(results)
    return results;
}