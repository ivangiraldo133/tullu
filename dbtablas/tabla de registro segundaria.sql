CREATE TABLE USUARIO (
    Usuario INT PRIMARY KEY,
    Nombre VARCHAR(100)
);

-- Crear tabla PEDIDOS_INICIALES
CREATE TABLE PEDIDOS_INICIALES (
    PedidoID SERIAL PRIMARY KEY,
    Usuario INT NOT NULL,
    TipoProducto VARCHAR(100),
    EstadoCuenta VARCHAR(10) CHECK (EstadoCuenta IN ('Abono', 'Debe')),
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    DescripcionPedido VARCHAR(255),
    EstadoPedido VARCHAR(50) CHECK (EstadoPedido IN ('En proceso', 'Enviado', 'Entregado')),
  
);

-- Consulta de prueba
SELECT * 
FROM PEDIDOS_INICIALES
WHERE Usuario IN (2, 3, 4, 5, 6, 8, 9, 10);

-- Inserción de pedido de prueba
INSERT INTO PEDIDOS_INICIALES 
(Usuario, CorreoElectronico, Telefono, TipoProducto, EstadoCuenta, DescripcionPedido, EstadoPedido, Observaciones)
VALUES 
(1, 'astian_ivan@hotmail.com', '555-1234', 'Producto A', 'Abono', 'Primer pedido de prueba', 'En proceso', 'Entrega prevista en 3 días.');

