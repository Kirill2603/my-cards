import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Layout} from "./layout/layout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout />
  </ChakraProvider>
)
