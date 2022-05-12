import '../styles/globals.css'
import '../styles/markDown.css'
import { ChakraProvider } from '@chakra-ui/react';

import '../src/utils/firebase/init'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
