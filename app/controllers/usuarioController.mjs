import {
  getAllUsuarios,
  createUsuario,
  actualizarUsuario
} from '../models/usuarioModel.mjs';

export async function listarUsuarios(req, res) {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los usuarios');
  }
}

export async function guardarUsuario(req, res) {
  const {Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena, Imagen } = req.body;

  try {
    const nuevoUsuario = await createUsuario(Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena, Imagen);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar el usuario');
  }
}

export async function actualizarUsuarioController(req, res) {
  const { UsuarioID } = req.params;
  const { Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena, Imagen } = req.body;

  try {
    const usuarioActualizado = await actualizarUsuario(UsuarioID, Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena, Imagen);
    res.status(200).json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar el usuario');
  }
}

// export async function eliminarUsuarioController(req, res) {
//   const { UsuarioID } = req.params;

//   try {
//     const usuarioEliminado = await eliminarUsuario(UsuarioID);

//     if (!usuarioEliminado) {
//       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//     }

//     res.status(200).json({ mensaje: 'Usuario eliminado', usuario: usuarioEliminado });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error al eliminar el usuario');
//   }
// }