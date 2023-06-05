import Resena from "../models/Resena.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Resena WHERE IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const createReseña = async(resena) => {
    const conn = await sql.connect(configDB)
    if(resena.cantEstrellas>5)
    {
        resena.cantEstrellas = 5;
    }
    else if(resena.cantEstrellas<1)
    {
        resena.cantEstrellas = 1;
    }
    const results = await conn.request()
    .input("rIdCliente", resena.idCliente)
    .input("rIdGestor", resena.idGestor)
    .input("rCantEstrellas", resena.cantEstrellas)
    .input("rTexto", resena.texto)
    .query('INSERT INTO Resena (IdCliente, IdGestor, CantEstrellas, Texto) VALUES (@rIdCliente, @rIdGestor, @rCantEstrellas, @rTexto')
    console.log(results)
    return results;
}