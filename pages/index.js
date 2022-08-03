//import NextLink from 'next/link'
import {
  Link,
  Heading,
  Box,Image,
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
import dynamic from 'next/dynamic'

import VoxelDogLoader from '../components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})


const Home = () => (
  <Layout>
    <Box
      flexShrink={0}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 6 }}
      textAlign="center"
    >
      {/* <box>
        <LazyVoxelDog />
      </box> */}

      <Image
        // maxWidth="150px"
        width="600px"
        display="inline-block"
        src="/images/contents/ani.gif"
        alt="Profile image"
      />
      {/* <Heading as="h1" variant="page-title">
        <b>
          <u>Ahlan</u>{' '}
        </b>
        👋
        <br></br>
      </Heading> */}

      <Heading as="h2" fontSize={50} my={6}>
        🤖 💻 🔨 👨‍🌾
      </Heading>
      
      <br></br>

      {/* <small> Updated : 27-December-2021</small> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
          <Link href="https://github.com/rahularepaka" target="_blank">
            <Button
              variant="ghost"
              //colorScheme="teal"
              align="center"
              leftIcon={<Icon as={IoLogoGithub} />}
            ></Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/rahul-arepaka/"
            target="_blank"
          >
            <Button
              variant="ghost"
              //colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
            ></Button>
          </Link>

          <Link href="https://instagram.com/rahularepaka" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoInstagram} />}
            ></Button>
          </Link>

          <Link href="mailto:rahul.arepaka@gmail.com" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoGoogle} />}
            ></Button>
          </Link>

          <Link
            href="mailto:rahul20ucse156@mahindrauniversity.edu.in"
            target="_blank"
          >
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoMicrosoft} />}
            ></Button>
          </Link>

          <Link href="https://twitter.com/RahulArepaka" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoTwitter} />}
            ></Button>
          </Link>
        </List>
      </Section>
    </Box>
  </Layout>
)

export default Home
