import Reseña from "../models/Reseña.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Reseña WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const createReseña = async(reseña) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("rIdCliente", reseña.idCliente)
    .input("rIdGestor", reseña.idGestor)
    .input("rCantEstrellas", reseña.cantEstrellas)
    .input("rTexto", reseña.texto)
    .query('INSERT INTO Reseña (IdCliente, IdGestor, CantEstrellas, Texto) VALUES (@rIdCliente, @rIdGestor, @rCantEstrellas, @gEmail')
    console.log(results)
    return results;
}