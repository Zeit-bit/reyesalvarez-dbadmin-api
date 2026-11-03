import { Request, Response } from "express";
import { productoRepository } from '../repository/ProductoRepository.js'
import { Producto } from '../entity/Producto.js'


export const getProducto = async (req: Request, res: Response) => {
    const producto: Producto | null = await productoRepository.findById(Number(req.params.id));

    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.json({ producto });
}

export const getProductos = async (req: Request, res: Response) => {
    const productos: Producto[] = await productoRepository.findAll();
    return res.json({ productos });
}

export const createProducto = async (req: Request, res: Response) => {
    const productoData: Partial<Producto> = req.body;
    const producto: Producto = await productoRepository.create(productoData);
    return res.status(201).json({ producto });
}