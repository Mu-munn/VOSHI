import "../styles/globals.css"
import "../styles/markDown.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import "../src/utils/firebase/init"
import { AuthProvider } from "../src/hooks/use-auth-user"
import { ClientProvider } from "../src/hooks/use-client"
import "@fontsource/rampart-one"

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      // heading: 'Open Sans, sans-serif',
      body: "Dela Gothic One, Raleway, sans-serif",
      heading: "Dela Gothic One, sans-serif, Rampart One",
    },
    fontWeights: {
      normal: 200,
      medium: 500,
      bold: 700,
    },
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
    },
  });

  return (
    <AuthProvider>
      <ClientProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ClientProvider>
    </AuthProvider>
  )
}

export default MyApp
