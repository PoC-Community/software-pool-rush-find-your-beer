import { Center, Spinner, Text, VStack } from '@chakra-ui/react';
import Home from '../pages/Home';
import Question1 from '../pages/Question1'
import React from 'react'
import {ChakraProvider} from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="question1" element={<Question1 />} />
    </Route>
  )
);

function App () {
  return(
<ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
</ChakraProvider>
  )
}
export default App;