import Notificacion from "../models/Notificacion.js";
import sql from 'mssql'
import configDB from "../models/db.js";


export const getByIdCliente = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Notificacion WHERE IdCliente = @whereCondition')
    console.log(results)
    return results;
}
