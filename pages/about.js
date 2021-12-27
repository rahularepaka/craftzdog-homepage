//import NextLink from 'next/link'
import {
  Link,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'

import { GridItem } from '../components/grid-item'


//import { ChevronRightIcon } from '@chakra-ui/icons'
//import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoMicrosoft,
  IoLogoGoogle,
  IoLogoBitcoin,
  IoLogoTwitter,
  IoGameController,
  IoLogoDesignernews,
  IoMusicalNote,
  IoGameControllerOutline,
  IoMicOffOutline
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'


import mu from '../public/images/contents/mu.jpg'
import oow from '../public/images/contents/oow.jpg'



const Home = () => (
  <Layout>
    <br/>
    <br/>
  
    
    <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <br/>
          <Heading as="h2" variant="page-title">
            Rahul Arepaka
          </Heading>
          <p>Undergraduate Robotics Researcher</p>
        </Box>
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
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio 
        </Heading>
        <li>Full Name : Sai Phani Rahul Arepaka</li>
        <li>DOB : 05-October-2001</li>
        <li>Zodia Sign : Libra</li>
      </Section>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About 
        </Heading>
        <p>A II-Year student pursing Computer Science and Engineering at Ecole Centrale School of Engineering, Mahindra University.
          <br /> <br />Currently, working with Farming Revolution GmbH (Deepfield Robotics, Bosch) on a Research Project on Vision Based Laser Targeting System for Weeding in Mobile Robots.
          <br /><br />Previously, worked on Laser Weeding for CNC-based farmbot with an open-source organization called FarmBot Inc.
          <br /><br />I was part of World Robotics Olympiad as Team UAE in 2018 ,FIRST Tech Challenge and Judge at FIRST Lego League in 2019/2020 and World Robotics Olympiad in 2021.</p>

      </Section>

      <Heading as="h2" variant="section-title">
          Education
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Our Own High School Al Warqa'a"
            thumbnail={oow}
          />

          <GridItem
            title="Ecole School of Engineering, Mahindra University"
            thumbnail={mu}
          />

          </SimpleGrid>


          <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hobbies 
        </Heading>
        <li>Cryptomining {<Icon as={IoLogoBitcoin} />}</li>
        <li>Robotics {<Icon as={IoGameController} />}</li>
        <li>Product Design {<Icon as={IoLogoDesignernews} />}</li>
        <li>Video Gaming {<Icon as={IoGameControllerOutline} />}</li>
        <li>DJ-ing{<Icon as={IoMusicalNote} />}</li>
        <li>Beatboxing{<Icon as={IoMicOffOutline} />}</li>


      </Section>



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Connect with me!
        </Heading>
        <List>
            <Link href="https://github.com/rahularepaka" target="_blank">
              <Button
                variant="ghost"
                //colorScheme="teal"
                align = "center"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
              </Button>
            </Link>

          
            <Link href="https://www.linkedin.com/in/rahul-arepaka/" target="_blank">
              <Button
                variant="ghost"
                //colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
              </Button>
            </Link>
          
            <Link href="https://instagram.com/rahularepaka" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
              </Button>
            </Link>

            <Link href="mailto:rahul.arepaka@gmail.com" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
              </Button>
            </Link>

             <Link href="mailto:rahul20ucse156@mahindrauniversity.edu.in" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoMicrosoft} />}
              >
              </Button>
            </Link>

            <Link href="https://twitter.com/RahulArepaka" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
              </Button>
            </Link>

        </List>
      </Section>


      

      
  </Layout>
)

export default Home
