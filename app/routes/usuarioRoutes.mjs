import express from 'express';
import {
  listarUsuarios,
  guardarUsuario,
} from '../controllers/usuarioController.mjs';

const router = express.Router();

router.get('/usuarios', listarUsuarios);

router.post('/usuarios', guardarUsuario);

export default router;
