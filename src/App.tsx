import { useState } from "react";

import { Container } from "@mui/material";

import Data from "./utils/dataCart.json";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";

function App() {
 

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Cart data={Data}/>
        <Suggestions />
      </Container>
      <Footer />
    </div>
  )
}

export default App
