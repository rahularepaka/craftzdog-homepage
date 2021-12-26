//import NextLink from 'next/link'
import {
  Link,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon,
} from '@chakra-ui/react'
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
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoMicrosoft
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>

    
    <Box
          flexShrink={0} 
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            display="inline-block"
            src="/images/img1.png"
            alt="Profile image"
            height = "500"
            width = "600"
          />

          <Heading as="h3" variant="page-title">
            Hello, I'm Rahul Arepaka.
          </Heading>
          <br/>
          <p>
            I am an undergraduate robotics researcher who is trying to bridge robotics, computer science, and engineering. I have a keen interest in robotics and computer vision.
          </p>

          <br></br>


        
              <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
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

        </Box>




      



  </Layout>
)

export default Home
