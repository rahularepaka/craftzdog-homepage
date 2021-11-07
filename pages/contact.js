import { Container, Heading ,Box, useColorModeValue,List,
  ListItem,Link,Button,Icon, Image} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoInstagram
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
const Works = () => (
  <Layout title="Works">
    <br/>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        {"If you need chai-time, or just want to message me, don't hesitate to reach out to me"}
      </Box>
    </Container>


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
            maxWidth="300px"
            display="inline-block"
            borderRadius="full"
            src="/images/me-1.png"
            alt="Profile image"
          />
        </Box>

    <Container>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            Social Channels
        </Heading>
        <List>
          <ListItem>
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

          </ListItem>
          
        </List>
      </Section>
    </Container>
  
  </Layout>
)

export default Works
