import Tramite from "../models/Tramite.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const getByIDGestor = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Tramite INNER JOIN TipoDeTramite ON Tramite.IdTipoTramite = TipoDeTramite.Id INNER JOIN TramiteXEtiqueta ON Tramite.Id = TramiteXEtiqueta.IdTramite INNER JOIN Etiqueta ON TramiteXEtiqueta.IdEtiqueta = Etiqueta.Id WHERE Tramite.IdGestor = @whereCondition')
    console.log(results)
    return results;
}

export const getByIDCliente = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT Tramite.Id, Tramite.Nombre, Tramite.Descripción, Tramite.Imagen FROM Tramite INNER JOIN TipoDeTramite ON Tramite.IdTipoTramite = TipoDeTramite.Id INNER JOIN TramiteXEtiqueta ON Tramite.Id = TramiteXEtiqueta.IdTramite INNER JOIN Etiqueta ON TramiteXEtiqueta.IdEtiqueta = Etiqueta.Id WHERE Tramite.IdCliente = @whereCondition')
    console.log(results)
    return results.recordsets[0];
}

export const getByID = async (id) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request().input("whereCondition", id).query('SELECT * FROM Tramite INNER JOIN TipoDeTramite ON Tramite.IdTipoTramite = TipoDeTramite.Id INNER JOIN TramiteXEtiqueta ON Tramite.Id = TramiteXEtiqueta.IdTramite INNER JOIN Etiqueta ON TramiteXEtiqueta.IdEtiqueta = Etiqueta.Id WHERE Tramite.Id = @whereCondition')
    console.log(results)
    return results.recordsets[0];
}

export const createTramite = async (tramite) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("tIdGestor", tramite.idGestor)
    .input("tIdCliente", tramite.idCliente)
    .input("tIdPais", tramite.idPais)
    .input("tNombre", tramite.nombre)
    .input("tDescripción", tramite.descripción)
    .input("tIdTipoTramite", tramite.idTipoTramite)
    .input("tImagen", tramite.imagen)
    .query('INSERT INTO Tramite (IdGestor, IdCliente, IdPais, Nombre, Descripción, IdTipoTramite, Imagen) VALUES (@tIdGestor, @tIdCliente, @tIdPais, @tNombre, @tDescripción, @tIdTipoTramite, @tImagen)')
    console.log(results)
    return results;
}

export const updateTramite = async (tramite) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("tId", tramite.id)
    .input("tIdPais", tramite.idPais)
    .input("tNombre", tramite.nombre)
    .input("tDescripción", tramite.descripción)
    .input("tImagen", tramite.imagen)
    .query('UPDATE Tramite SET Nombre = @tNombre, Descripción = @tDescripción, Imagen = @tImagen, IdPais = @tIdPais WHERE Tramite.Id = @tId')
    console.log(results)
    return results
}