import { Heading } from "@chakra-ui/react";
import GridCardItem from "./components/gridCardItem";
import ModalAddItem from "./components/modalAddItem";

function App() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Heading size="lg" fontSize="50px" textAlign="center" py="3">
        List Products
      </Heading>
      <ModalAddItem />
      <GridCardItem />
    </div>
  );
}

export default App;
