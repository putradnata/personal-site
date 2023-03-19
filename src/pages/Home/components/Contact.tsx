import { Box, Heading, Text } from '@chakra-ui/react';
import styles from '../../../styles/Home.module.css';

export default function Contact() {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems={{ base: 'flex-start' }}
      justifyContent={{ base: 'center' }}
      pb={{ base: '4rem' }}
      id="contact"
    >
      <Heading as="h2" size={{ base: 'md' }} className={styles.title}>
        Contact
      </Heading>
      <Text lineHeight="10">Want to react me? Here are my social links: </Text>

      <Box pl={{ base: '1.25rem' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'flex-start' }}
          justifyContent={{ base: 'center' }}
          id="social-links"
          pt={{ base: ' 1.5rem' }}
        >
          <Text className={styles.title} fontWeight="semibold">
            Social Links
          </Text>

          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start' }}
            justifyContent={{ base: 'center' }}
            mt={{ base: '0.5rem' }}
          >
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center', md: 'space-between' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text> Andika Putra Dinata</Text>
            </Box>
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center', md: 'space-between' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text> @putradnata15</Text>
            </Box>
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center', md: 'space-between' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text> @putradnata</Text>
            </Box>
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center', md: 'space-between' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text> Andika Putra D.</Text>
            </Box>
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center', md: 'space-between' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text> putradnata15@gmail.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
