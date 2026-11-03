import { Router } from "express";
import { getProducto, getProductos, createProducto } from "../controllers/producto.controller.js";

const router = Router();
router.get('/producto/:id', getProducto);
router.get('/productos', getProductos);
router.post('/producto/', createProducto);

export default router;