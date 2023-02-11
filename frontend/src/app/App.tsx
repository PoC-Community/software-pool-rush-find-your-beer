import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import Question4 from "../pages/Question4";
import Result from "../pages/Result";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="question1" element={<Question1 />} />
          <Route path="question2" element={<Question2 />} />
          <Route path="question3" element={<Question3 />} />
          <Route path="question4" element={<Question4 />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;