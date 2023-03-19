import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ILayout } from '../interfaces';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [100, 0] }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.8 }}
      >
        <Container className="wrapper" mx={{ base: 'auto' }}>
          {children}
        </Container>
      </motion.div>
      <Footer />
    </>
  );
}
