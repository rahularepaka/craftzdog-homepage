import { Container, Heading ,Box, useColorModeValue,List,
  ListItem,Link,Button,Icon} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoBookmark
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
        Currently, Robotics Researcher at Farming Revolution GmbH  Laser Weeding Moblie Robots
      </Box>
    </Container>

    <Container>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work Related Documents
        </Heading>
        <List>
          <ListItem>
            <Link href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoBookmark} />}
              >
                Curriculum vitae
              </Button>
            </Link>

            <Link href="https://drive.google.com/file/d/1iGF3B8WIjg4tHNcW93e6fmZrTAPka2UQ/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoBookmark} />}
              >
                Resume
              </Button>
            </Link>

          </ListItem>

          
        </List>
      </Section>
    </Container>
    
    <Container>
      <Heading as="h3" variant="section-title">
          What I have been working on recently is below
        </Heading>

        <Section>
          <a href="https://www.farming-revolution.com/" ><b>Farming Revolution GmbH (Deepfield Robotics, Bosch)</b></a>
          <h4><i>Robotics Researcher - Project Intern</i></h4>
          <li>Developed a vision-based targeting system for laser weeding for mobile robots using a visual servoing approach for
continuous laser weeding.</li>
          <li>Used a laser aiming system and computer vision to move the pan-tilt system to reach the desired target.</li>
          <li>Created a testbed combining circuits and hardware and coordinated team members and communicate with the client in
Germany from India.</li>
          <li>Played an integral role in bringing Mahindra University and Farming Revolution GmbH together.</li>
          <br/>
          <b>September 2021 - Present</b>
          <br/>
          <i>Ludwigsburg, Germany [Remote]</i>
          
        </Section>

        <hr></hr>
         <Section>
           <br/>
          <a href="https://farm.bot/" ><b>FarmBot Inc</b></a>
          <h4><i>Project Lead and Robotics Designer</i></h4>
          <li>As a proof of concept, developed a static-based weeding mechanism for farmbot kits using computer vision to target the
weeds and coordinate their removal using G-code.</li>
          <li>Programmed the hardware and circuits to communicate with the platform to calculate the offset and power the laser to
kill the weeds.</li>
          <li>Communicated with the client in California, United States of America coordinated the team members and contributed to
the open-source community.</li>
          <li>Participated in the establishment of the Center for Artificial Intelligence and Robotics and the Farmbot.</li>
          <li>By 2023, this proof-of-concept extension is expected to appear on the farmbot.</li>
          <br/>
          <b>April 2021 - July 2021</b>
          <br/>
          <i>Dubai, United Arab Emirates</i>
          <br/><br/>
          
        </Section>


    </Container>
  </Layout>
)

export default Works
