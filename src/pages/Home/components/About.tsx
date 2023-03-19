import { Box, Heading, Text } from '@chakra-ui/react';
import styles from '../../../styles/Home.module.css';

export default function About() {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems={{ base: 'flex-start' }}
      justifyContent={{ base: 'center' }}
      py={{ base: '4rem' }}
      id="about"
    >
      <Heading as="h2" size={{ base: 'md' }} className={styles.title}>
        About
      </Heading>
      <Text lineHeight="10">Here are some info about me: </Text>

      <Box pl={{ base: '1.25rem' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'flex-start' }}
          justifyContent={{ base: 'center' }}
          id="educations"
          pt={{ base: ' 1.5rem' }}
        >
          <Text className={styles.title} fontWeight="semibold">
            Educations
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
              <Text fontWeight="semibold">2013 - 2016:</Text>
              <Text> SMK TI Bali Global Denpasar.</Text>
            </Box>
            <Box
              as="span"
              display="flex"
              flexDirection="row"
              justifyContent={{ base: 'center' }}
              alignItems={{ base: 'center' }}
              columnGap={{ base: '0.5rem' }}
            >
              <Text fontWeight="semibold">2016 - 2020:</Text>
              <Text> ITB STIKOM Bali.</Text>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'flex-start' }}
          justifyContent={{ base: 'center' }}
          id="works"
          pt={{ base: ' 1.5rem' }}
        >
          <Text className={styles.title} fontWeight="semibold">
            Works
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
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'space-between' }}
              width="full"
              alignItems={{ base: 'flex-start' }}
              columnGap={{ base: '1.5rem' }}
            >
              <Box display="flex" flexDirection="column">
                <Text fontWeight="semibold" fontSize="xs">
                  Sept - Dec 2016:
                </Text>
                <Text fontStyle="italic" fontSize="sm">
                  Internship as Operation
                </Text>
              </Box>
              <Text fontWeight="semibold">Destination Asia</Text>
            </Box>

            <Box
              as="span"
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'space-between' }}
              width="full"
              alignItems={{ base: 'flex-start' }}
              columnGap={{ base: '1.5rem' }}
              pt={{ base: '1.25rem' }}
            >
              <Box display="flex" flexDirection="column">
                <Text fontWeight="semibold" fontSize="xs">
                  Jan 2017 - Jan 2018:
                </Text>
                <Text fontStyle="italic" fontSize="sm">
                  IT Support and Junior Web Developer
                </Text>
              </Box>
              <Text fontWeight="semibold">Tunjung Teknologi</Text>
            </Box>

            <Box
              as="span"
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'space-between' }}
              width="full"
              alignItems={{ base: 'flex-start' }}
              columnGap={{ base: '1.5rem' }}
              pt={{ base: '1.25rem' }}
            >
              <Box display="flex" flexDirection="column">
                <Text fontWeight="semibold" fontSize="xs">
                  Jan 2018 - 2019:
                </Text>
              </Box>
              <Text fontWeight="semibold">Freelance Works</Text>
            </Box>

            <Box
              as="span"
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'space-between' }}
              width="full"
              alignItems={{ base: 'flex-start' }}
              columnGap={{ base: '1.5rem' }}
              pt={{ base: '1.25rem' }}
            >
              <Box display="flex" flexDirection="column">
                <Text fontWeight="semibold" fontSize="xs">
                  Feb 2019 - Present:
                </Text>
                <Text fontStyle="italic" fontSize="sm">
                  WordPress Designer &amp; Junior Front End Developer
                </Text>
              </Box>
              <Text fontWeight="semibold">PT. Algo Sea Biz.</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
