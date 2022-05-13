import '../styles/globals.css'
import '../styles/markDown.css'
import { ChakraProvider } from '@chakra-ui/react';

import '../src/utils/firebase/init'
import { AuthProvider } from '../src/hooks/use-auth-user';
import { ClientProvider } from '../src/hooks/use-client';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ClientProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ClientProvider>
    </AuthProvider>
  )
}

export default MyApp
