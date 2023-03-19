import {
  Flex,
  Text,
  Icon,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import CrescentMoonIcon from '../assets/icons/CrescentMoon';
import { IMenuItems } from '../interfaces';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navBg = useColorModeValue('#ccd0da', '#313244');
  const textColor = useColorModeValue('#4c4f69', '#cdd6f4');
  const themeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);

  const menuItems: IMenuItems[] = [
    {
      label: 'Home',
      path: '/',
      id: 'home',
    },
    {
      label: 'About',
      path: '/',
      id: 'about',
    },
    {
      label: 'Projects',
      path: '/',
      id: 'projects',
    },
    {
      label: 'Contact',
      path: '/',
      id: 'contact',
    },
  ];

  return (
    <Box
      width="full"
      py={{ base: '0.5rem', lg: '2rem' }}
      bgColor={navBg}
      boxShadow="2xl"
      position="fixed"
    >
      <Container width="full" mx={{ base: 'auto' }}>
        <Flex
          direction="row"
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'space-between' }}
        >
          <Flex className="logo" direction="row" columnGap={{ base: '1rem' }}>
            <Icon as={CrescentMoonIcon} />
            <Text fontWeight="semibold" color={textColor}>
              Putra Dinata
            </Text>
          </Flex>

          <Menu isLazy>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />
            <MenuList>
              {menuItems.map((item) => (
                <MenuItem as="a" href={item.path} key={item.id}>
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem
                as={Button}
                leftIcon={themeIcon}
                onClick={toggleColorMode}
                justifyContent={{ base: 'flex-start' }}
              >
                {colorMode === 'light' ? 'Light' : 'Dark'}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}
