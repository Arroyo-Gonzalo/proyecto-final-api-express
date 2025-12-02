import { getAllProductsService, getProductByIdService, addProductService, deleteProductService } from "../services/products.services.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send();
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID requerido" });
    }

    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send();
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await addProductService(product);
    res.status(201).json(newProduct);
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).send();
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID requerido" });
    }

    await deleteProductService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send();
  }
};
