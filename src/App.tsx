import { Box, Container } from "@mui/material";

import Data from "./utils/dataCart.json";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";


function App() {
  return (
      <Box>
        <Header />
        <Container maxWidth="xl">
          <Cart data={Data}/>
          <Suggestions />
        </Container>
        <Footer />
      </Box>
  )
}

export default App
