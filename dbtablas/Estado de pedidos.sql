DROP TABLE IF EXISTS ESTADO_PEDIDOS;
-- tabla de revision de pedidos 
CREATE TABLE ESTADO_PEDIDOS (
    EstadoPedidoID SERIAL PRIMARY KEY,                             -- ID único autoincremental para el estado
    PedidoID INT NOT NULL,                                          -- ID del pedido (podría ser una clave foránea si hay una tabla de pedidos)
    Estado VARCHAR(50) CHECK (Estado IN ('Pendiente', 'Procesando', 'Enviado', 'Entregado', 'Cancelado')) NOT NULL,  -- Estado del pedido
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,              -- Fecha de creación del registro
    FechaActualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,         -- Fecha de la última actualización
    Comentarios TEXT                                               -- Comentarios adicionales sobre el estado del pedido
);
INSERT INTO ESTADO_PEDIDOS 
(PedidoID, Estado, Comentarios)
VALUES 
(1, 'Pendiente', 'Pedido recibido, esperando confirmación de pago.');

-- Actualizar el estado de un pedido
UPDATE ESTADO_PEDIDOS
SET Estado = 'Enviado', FechaActualizacion = CURRENT_TIMESTAMP, Comentarios = 'Pedido enviado al cliente.'
WHERE PedidoID = 1;