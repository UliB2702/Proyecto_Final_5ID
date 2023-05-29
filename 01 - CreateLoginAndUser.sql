USE [master]
GO
CREATE LOGIN [Ulises] WITH PASSWORD='Clientes', DEFAULT_DATABASE=[ProyectoFinalNewLife], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [ProyectoFinalNewLife]
GO
CREATE USER [Ulises] FOR LOGIN [Ulises]
GO
USE [ProyectoFinalNewLife]
GO
ALTER ROLE [db_owner] ADD MEMBER [Ulises]
GO
