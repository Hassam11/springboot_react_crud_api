import { Product } from "../interfaces/interfacesApp";

const BASE_URL: string = "http://localhost:8080/api/v1/product";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const createProduct = async (product: Product) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error al enviar productos:", error);
    throw error;
  }
};

export const updateProduct = async (id: number, product: Product) => {
  const existingProduct = await getProductById(id);
  if (!existingProduct) {
    throw new Error(`El producto con ID ${id} no existe en la base de datos.`);
  }

  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al crear el product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(`Producto con ID ${id} eliminado con éxito.`);
  } catch (error) {
    console.error(`Error al eliminar el producto con ${id}: `, error);
    throw error;
  }
};
