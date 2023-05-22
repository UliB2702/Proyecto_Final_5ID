import Reseña from "../models/Reseña.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Reseña WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const createReseña = async(gestor) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("rIdCliente", gestor.idCliente)
    .input("rIdGestor", gestor.idGestor)
    .input("rCantEstrellas", gestor.cantEstrellas)
    .input("rTexto", gestor.texto)
    .query('INSERT INTO Gestor (IdCliente, IdGestor, CantEstrellas, Texto) VALUES (@rIdCliente, @rIdGestor, @rCantEstrellas, @gEmail')
    console.log(results)
    return results;
}