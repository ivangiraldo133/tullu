DROP TABLE IF EXISTS INVENTARIO;

-- Ahora crea la tabla con los campos definidos
CREATE TABLE INVENTARIO (
    productoID SERIAL PRIMARY KEY,                           -- ID autoincremental
    producto VARCHAR(100) NOT NULL,                            -- Nombre del material o producto
    Cantidad INT CHECK (Cantidad >= 0),                         -- Cantidad en stock
    Descripcion VARCHAR(50),                                   -- Descripción o categoría
    PrecioCompra NUMERIC(10, 2) NOT NULL,                      -- Precio de compra
    PrecioVenta NUMERIC(10, 2) NOT NULL,                       -- Precio de venta
    FechaIngreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,          -- Fecha de ingreso al inventario
    EstadoProducto VARCHAR(20) CHECK (EstadoProducto IN ('Disponible', 'Agotado', 'Descontinuado')), -- Estado
    MarcaProducto VARCHAR(50),                                 -- Marca del producto
    Proveedor VARCHAR(100),                                    -- Nombre del proveedor
    Ubicacion VARCHAR(100)                                     -- Ubicación física en la bodega
);

-- Ahora puedes consultar registros por InventarioID (que es la clave primaria)
SELECT * 
FROM INVENTARIO
WHERE InventarioID IN (1,2,3,4,5,6,7,8,9,10);

-- Inserta un producto de ejemplo en el inventario
INSERT INTO INVENTARIO 
(Material, Cantidad, Descripcion, PrecioCompra, PrecioVenta, EstadoProducto, MarcaProducto, Proveedor, Ubicacion)
VALUES 
('Mouse inalámbrico', 50, 'Accesorio de computación', 5.000, 15.00, 'Disponible', 'Logitech', 'Distribuidora Tech', 'Estante A3 - Bodega 1');