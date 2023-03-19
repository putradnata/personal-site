import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/poppins';
import App from './App';
import theme from './lib/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </ChakraProvider>
  </React.StrictMode>
);
