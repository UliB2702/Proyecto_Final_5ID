import Cliente from "../models/Cliente.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getAll = async () => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().query('SELECT * FROM Cliente')
    console.log(results)
    return results;
}

export const createCliente = async(cliente) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("cNombre", cliente.nombre)
    .input("cEmail", cliente.email)
    .input("cPsw", cliente.contraseña)
    .input("cDni", cliente.dni)
    .input("cFoto", cliente.fotoPerfil)
    .query('INSERT INTO Cliente (Nombre, Dni, Email, Contraseña, FotoPerfil) VALUES (@gNombre, @gDni, @gEmail, @gPsw, @gDni, @gFoto)')
    console.log(results)
    return results;
}

export const getByParams = async (email, contraseña) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", email).input("whereCondition2", contraseña).query('SELECT * FROM Cliente WHERE Email = @whereCondition AND Contraseña = @whereCondition2')
    console.log(results)
    return results;
}