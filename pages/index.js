import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
//import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>

    <br/><br/>
    
    <Box
          flexShrink={0} 
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="400px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jpg"
            alt="Profile image"
          />
        </Box>



    <Container>




        <br/>

        <Box display={{ md: 'center' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rahul Arepaka
          </Heading>
          <p>Undergraduate Robotics Researcher in Agriculture</p>
        </Box>

        

      </Box>
      <br/>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Currently, Researching on Continous Laser Weeding in Mobile Robots at Farming Revolution GmbH
      </Box> 

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About 
        </Heading>
        <p>A II-Year student pursing Computer Science and Engineering at Ecole Centrale School of Engineering, Mahindra University.
          <br /> <br />Currently, working with Farming Revolution GmbH (Deepfield Robotics, Bosch) on a Research Project on Vision Based Laser Targeting System for Weeding in Mobile Robots.
          <br /><br />Previously, worked on Laser Weeding for CNC-based farmbot with an open-source organization called FarmBot Inc.
          <br /><br />I was part of World Robotics Olympiad as Team UAE in 2018 ,FIRST Tech Challenge and Judge at FIRST Lego League in 2019/2020 and World Robotics Olympiad in 2021.</p>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Things which I works on
            </Button>
          </NextLink>
        </Box>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
            <Link href="https://github.com/rahularepaka" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
              </Button>
            </Link>

          
            <Link href="https://www.linkedin.com/in/rahul-arepaka/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
              </Button>
            </Link>
          
            <Link href="https://instagram.com/rahularepaka" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
              </Button>
            </Link>

            <Link href="mailto:rahul.arepaka@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
              </Button>
            </Link>

        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
