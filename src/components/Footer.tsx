import {
  Flex,
  Text,
  Container,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

export default function Footer() {
  const navBg = useColorModeValue('#ccd0da', '#313244');
  const textColor = useColorModeValue('#4c4f69', '#cdd6f4');

  const date = new Date();

  return (
    <Box
      width="full"
      py={{ base: '0.5rem', lg: '2rem' }}
      bgColor={navBg}
      boxShadow="2xl"
      bottom="0"
    >
      <Container width="full" mx={{ base: 'auto' }}>
        <Flex
          direction="row"
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
        >
          <Flex className="logo" direction="row" columnGap={{ base: '0.5rem' }}>
            <Text color={textColor}>{date.getFullYear()}</Text>
            <Text fontWeight="semibold" color={textColor}>
              Andhika Putra Dinata
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
