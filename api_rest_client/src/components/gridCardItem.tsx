import { Grid, Text, Spinner } from "@chakra-ui/react";
import CardItem from "./cardItem";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/apiContext";
import { getAllProducts } from "../api/api";
import SpinnerComponent from "./spinner";

export default function GridCardItem() {
  const { product, products, setProducts } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [setProducts, product]);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      gap="6"
      py="6"
    >
      {isLoading ? (
        <SpinnerComponent />
      ) : products && products.length > 0 ? (
        products.map((item) => <CardItem key={item.id} infoCard={item} />)
      ) : (
        <Text>No hay productos disponibles.</Text>
      )}
    </Grid>
  );
}
