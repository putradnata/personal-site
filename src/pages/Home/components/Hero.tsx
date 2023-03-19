import { Box, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'center' }}
      pt={{ base: '10rem' }}
      id="hero"
    >
      <Heading as="h1" size={{ base: 'lg' }}>
        Hi, I&apos;m Andhika Putra
      </Heading>
      <Text fontSize={{ base: 'sm' }}>Lipsum dolor</Text>
    </Box>
  );
}
