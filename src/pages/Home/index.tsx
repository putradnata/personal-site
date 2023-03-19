import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import About from './components/About';
import Hero from './components/Hero';
import styles from '../../styles/Home.module.css';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
