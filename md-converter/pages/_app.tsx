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
      body: "Raleway, sans-serif",
      heading: "Rampart One, sans-serif",
    },
  })
  

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
