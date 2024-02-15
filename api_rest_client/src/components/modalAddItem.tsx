import { useContext, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { createProduct } from "../api/api";
import { ProductContext } from "../context/apiContext";

export default function ModalAddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url_image, setUrl_Image] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const { product, setProduct } = useContext(ProductContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const imageUrl =
        url_image.trim() === ""
          ? "https://trolleymate.co.uk/assets/img/error_404.jpeg"
          : url_image;

      const newProduct = {
        name,
        description,
        url_image: imageUrl,
        stock,
        price,
      };

      await createProduct(newProduct);
      // console.log("Nuevo producto creado:", createdProduct);
      toast({
        title: "Product created.",
        description: "Product created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      setProduct({
        id: 0,
        name: "",
        description: "",
        url_image: "",
        stock: 0,
        price: 0,
      });

      onClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="green" mt="24px">
        Add Product
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* name */}
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Laptop"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* description */}
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Rtx 4090"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {/* Image */}
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                placeholder="https://..."
                value={url_image}
                onChange={(e) => setUrl_Image(e.target.value)}
              />
              {/* Stock */}
              <FormLabel>Stock</FormLabel>
              <NumberInput
                max={50}
                min={0}
                value={stock}
                onChange={(valueStr, value) => setStock(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {/* price */}
              <FormLabel>Price</FormLabel>
              <NumberInput
                defaultValue={0}
                precision={2}
                step={0.2}
                value={price}
                onChange={(valueStr, value) => setPrice(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
