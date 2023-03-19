import { Box, Heading, Text } from '@chakra-ui/react';
import styles from '../../../styles/Home.module.css';

export default function Projects() {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems={{ base: 'flex-start' }}
      justifyContent={{ base: 'center' }}
      pb={{ base: '4rem' }}
      id="projects"
    >
      <Heading as="h2" size={{ base: 'md' }} className={styles.title}>
        Projects
      </Heading>
      <Text lineHeight="10">Here are some projects i&apos;ve made: </Text>
    </Box>
  );
}
