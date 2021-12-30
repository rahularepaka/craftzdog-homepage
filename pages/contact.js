import { Container, Heading ,Box,List,Link,Button,Icon} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoMicrosoft,
  IoLogoTwitter
} from 'react-icons/io5'

//import { BioSection, BioYear } from '../components/bio'

/*
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
*/


import dynamic from 'next/dynamic'

import VoxelDogLoader from '../components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})



const Works = () => (
  <Layout title="Works">
    <Container>
      <box><LazyVoxelDog /></box>
      <Box
          flexShrink={0} 
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Heading as="h2" variant="section-title">
          Get in Touch
        </Heading>
        <br></br>

        <p>I am always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        


        <br></br>
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


        </Box>
      



    </Container>

  
  </Layout>
)

export default Works
