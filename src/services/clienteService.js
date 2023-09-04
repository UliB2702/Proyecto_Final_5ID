import Cliente from "../models/Cliente.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getById = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Cliente WHERE Id = @whereCondition')
    console.log(results)
    return results;
}


export const createCliente = async(cliente) => {
    const conn = await sql.connect(configDB)
    let results
    if(cliente.dni<10000000 || cliente.dni>99999999)
    {
    results = undefined
    }
    else{
    results = await conn.request()
    .input("cNombre", cliente.nombre)
    .input("cEmail", cliente.email)
    .input("cPsw", cliente.contraseña)
    .input("cDni", cliente.dni)
    .input("cFoto", cliente.fotoPerfil)
    .query('INSERT INTO Cliente (Nombre, Dni, Email, Contraseña, FotoPerfil) VALUES (@cNombre, @cDni, @cEmail, @cPsw, @cFoto)')
    console.log(results)
    }
    return results;
}

export const getByParams = async (email, contraseña) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", email).input("whereCondition2", contraseña).query('SELECT * FROM Cliente WHERE Email = @whereCondition AND Contraseña = @whereCondition2')
    console.log(results)
    return results.recordsets;
}