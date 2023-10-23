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

export const createTramite = async (tramite) => {
    const conn = await sql.connect(configDB)
    const results = await conn.request()
    .input("tIdGestor", tramite.idGestor)
    .input("tIdCliente", tramite.idCliente)
    .input("tIdPais", tramite.idPais)
    .input("tNombre", tramite.nombre)
    .input("tDescripción", tramite.descripción)
    .input("tIdTipoTramite", tramite.idTipoTramite)
    .query('INSERT INTO Tramite (IdGestor, IdCliente, IdPais, Nombre, Descripción, IdTipoTramite, Tramite.Imagen) VALUES (@tIdGestor, @tIdCliente, @tIdPais, @tNombre, @tDescripción, @tIdTipoTramite, @tImagen)')
    console.log(results)
    return results;
}