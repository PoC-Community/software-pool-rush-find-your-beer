import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="question1" element={<Question1 />} />
          <Route path="question2" element={<Question2 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;