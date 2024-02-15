import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { deleteProduct } from "../api/api";
import { useContext } from "react";
import { ProductContext } from "../context/apiContext";

export default function CardItem({ infoCard }) {
  const { products, setProducts } = useContext(ProductContext);

  const handleClick = async (id) => {
    await deleteProduct(infoCard.id);
    const updatedProducts = products.filter(
      (product) => product.id !== infoCard.id
    );
    setProducts(updatedProducts);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={infoCard.url_image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{infoCard.name}</Heading>
          <Text>{infoCard.description}</Text>
          <Text fontSize="2xl">${infoCard.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          spacing="2"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="solid" colorScheme="red" onClick={handleClick}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
