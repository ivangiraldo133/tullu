import { pool } from '../../db/pool.mjs';

export async function getAllUsuarios() {
    const result = await pool.query('SELECT * usuario');
    return result.rows;
}

export async function createusuario(Nombre,Apellidos,Telefono,CorreoElectronico,Contrasena, Imagen) {
    const result = await pool.query(
        'INSERT INTO gastos (nombre, apellidos,telefono,correoelectronico,contrasena,imagen) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [Nombre,Apellidos,Telefono,CorreoElectronico,Contrasena,Imagen]
    );
    return result.rows[0];
}

// export async function updateUsuarios(Nombre,Apellidos,Telefono,CorreoElectronico,Contrasena, Imagen) {
//     const result = await pool.query(
//         'UPDATE usuario SET Nombre = $1, Apellidos = $2, Telefono = $3, CorreoElectronico = $4, Contrasena = $5, Imagen = $6  RETURNING *',
//         [Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena, Imagen, UsuarioID]
//     );
//     return result.rows[0];
// }

export async function actualizarUsuario(UsuarioID) {
   const result = await pool.query('DELETE FROM usuario WHERE UsuarioID = $1 RETURNING *', [UsuarioID]);
  return result.rows[0];
}
