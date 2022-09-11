//import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// import ThemeToggleButton from './theme-toggle-button'
//import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#393E46' : undefined}
        color={active ? '#FFFFFF' : inactiveColor}
        _target={_target}
        {...props}
        borderRadius="lg"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#222831')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <LinkItem href="/" path={path}>
            Rahul Arepaka
          </LinkItem>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem
            _target="_blank"
            href="/work"
            path={path}
            //display="inline-flex"
            //alignItems="center"
            //style={{ gap: 4 }}
            //pl={2}
          >
            Work
          </LinkItem> */}

          {/* <LinkItem href="/coursework" path={path}>
            Coursework
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            {/* <LinkItem href="/about" path={path}>
              About
            </LinkItem> */}

            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>
            <LinkItem href="" path={path}></LinkItem>

            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            {/* <LinkItem href="/achievements" path={path}>
              Achievements
            </LinkItem> */}
            {/* <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem> */}

            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              href=""
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
              <a href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing">
                Resume
              </a>
            </Box>
          </Stack>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink> */}
                {/* <NextLink href="/achievements" passHref>
                  <MenuItem as={Link}>Achievements</MenuItem>
                </NextLink> */}
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                {/* <NextLink href="/coursework" passHref>
                  <MenuItem as={Link}>Coursework</MenuItem>
                </NextLink>
                <NextLink href="/work" passHref>
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink> */}

                <NextLink
                  href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing"
                  passHref
                >
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                {/* <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
