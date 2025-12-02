import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "../models/products.models.js";

export const getAllProductsService = async () => {
  return await obtenerProductos();
};

export const getProductByIdService = async (id) => {
  return await obtenerProducto(id);
};

export const addProductService = async (product) => {

  if (!product.name || !product.price) {
    const err = new Error("name y price son obligatorios");
    err.statusCode = 400;
    throw err;
  }
  return await agregarProducto(product);
};

export const deleteProductService = async (id) => {
  return await eliminarProducto(id);
};
