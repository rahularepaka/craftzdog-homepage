import {Heading ,Box, useColorModeValue,List,
  ListItem,Link,Button,Icon,SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoBook,
  IoBookmark, IoHardwareChip
} from 'react-icons/io5'

import { GridItem } from '../components/grid-item'

import mu from '../public/images/contents/mu.jpg'
import oow from '../public/images/contents/oow.jpg'

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
<<<<<<< HEAD
    <br />
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Currently, Robotics Researcher at Farming Revolution GmbH Laser Weeding
      Moblie Robots
    </Box>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Work Related Documents
      </Heading>
      <List>
        <ListItem>
          <Link
            href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<Icon as={IoBookmark} />}>
              Curriculum vitae
            </Button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1iGF3B8WIjg4tHNcW93e6fmZrTAPka2UQ/view?usp=sharing"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<Icon as={IoBookmark} />}>
              Resume
            </Button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1LkFl3pew0gRdKwFnCA6ynWbHB78GlL5J/view?usp=sharing"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<Icon as={IoBookmark} />}>
              LOR&apos;s
            </Button>
          </Link>
        </ListItem>
=======
    <br/>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Currently, Robotics Researcher at Farming Revolution GmbH  Laser Weeding Moblie Robots
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work Related Documents
        </Heading>
        <List>
          <ListItem>
            <Link href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBookmark} />}
              >
                Curriculum vitae
              </Button>
            </Link>

            <Link href="https://drive.google.com/file/d/1iGF3B8WIjg4tHNcW93e6fmZrTAPka2UQ/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBookmark} />}
              >
                Resume
              </Button>
            </Link>

            <Link href="https://drive.google.com/file/d/1LkFl3pew0gRdKwFnCA6ynWbHB78GlL5J/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBookmark} />}
              >
                LOR&apos;s
              </Button>
            </Link>

          </ListItem>
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2

        <Heading as="h3" variant="section-title">
          Skills
        </Heading>

<<<<<<< HEAD
        <ListItem>
          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Python
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            C
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            C++
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Linux
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Robotics Operating System
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Git
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Arduino
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Raspberry Pi
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Nvidia Jetson Platform
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            OpenCV
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Internet of Things
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            Gazebo Simulation
          </Button>

          <Button variant="ghost" leftIcon={<Icon as={IoHardwareChip} />}>
            RViz
          </Button>
        </ListItem>
      </List>
    </Section>

    <Heading as="h3" variant="section-title">
      Work Experience
    </Heading>

    <Section>
      <a href="https://www.farming-revolution.com/">
        <b>Farming Revolution GmbH (Deepfield Robotics, Bosch)</b>
      </a>
      <h4>
        <i>Robotics Researcher - Project Intern</i>
      </h4>
      <li>
        Developed a vision-based targeting system for laser weeding for mobile
        robots using a visual servoing approach for continuous laser weeding.
      </li>
      <li>
        Used a laser aiming system and computer vision to move the pan-tilt
        system to reach the desired target.
      </li>
      <li>
        Created a testbed combining circuits and hardware and coordinated team
        members and communicate with the client in Germany from India.
      </li>
      <li>
        Played an integral role in bringing Mahindra University and Farming
        Revolution GmbH together.
      </li>
      <br />
      <b>September 2021 - Present</b>
      <br />
      <i>Ludwigsburg, Germany [Remote]</i>
    </Section>

    <hr></hr>
    <Section>
      <br />
      <a href="https://farm.bot/">
        <b>FarmBot Inc</b>
      </a>
      <h4>
        <i>Project Lead and Robotics Designer</i>
      </h4>
      <li>
        As a proof of concept, developed a static-based weeding mechanism for
        farmbot kits using computer vision to target the weeds and coordinate
        their removal using G-code.
      </li>
      <li>
        Programmed the hardware and circuits to communicate with the platform to
        calculate the offset and power the laser to kill the weeds.
      </li>
      <li>
        Communicated with the client in California, United States of America
        coordinated the team members and contributed to the open-source
        community.
      </li>
      <li>
        Participated in the establishment of the Center for Artificial
        Intelligence and Robotics and the Farmbot.
      </li>
      <li>
        By 2023, this proof-of-concept extension is expected to appear on the
        farmbot.
      </li>
      <br />
      <b>April 2021 - July 2021</b>
      <br />
      <i>Dubai, United Arab Emirates</i>
      <br />
      <br />
    </Section>

    <Heading as="h2" variant="section-title">
      Education
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="CBSE - Science Stream with Computer Science : GEMS Our Own High School Al Warqa'a - Boys Batch of 2020"
        thumbnail={oow}
      />
      <GridItem
        title="B.Tech - Computer Science and Engineering : Ecole School of Engineering, Mahindra University Batch of 2024"
        thumbnail={mu}
      />
    </SimpleGrid>

    <br></br>
    <Heading as="h3" variant="section-title">
      Notable Coursework
    </Heading>

    <Section>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Digital Logic Design and Computer Architecture
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Artificial and Computational Intelligence
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Machine Learning with Python
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Theory of Computation
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Design Thinking
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Programming Workshop{' '}
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Optimization for Artificial Intelligence
      </Button>

      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>  
        Discrete Mathematics Structures
      </Button>

      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Data Structures and Algorithms
      </Button>

      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Programming Workshop
      </Button>

      <Button variant="ghost" leftIcon={<Icon as={IoBook} />}>
        Introduction to Computer Science
      </Button>
    </Section>
=======
              <ListItem>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Python
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                C
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                C++
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Linux
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Robotics Operating System
              </Button>

               <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Git
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Arduino
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Raspberry Pi
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Nvidia Jetson Platform
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                OpenCV
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Internet of Things
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                Gazebo Simulation
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoHardwareChip} />}
              >
                RViz
              </Button>

          </ListItem>

       
        </List>
      </Section>



    
      <Heading as="h3" variant="section-title">
          Work Experience
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

        <Heading as="h2" variant="section-title">
          Education
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="CBSE - Science Stream with Computer Science : GEMS Our Own High School Al Warqa'a - Boys Batch of 2020"
            thumbnail={oow}
          />
          <GridItem
            title="B.Tech - Computer Science and Engineering : Ecole School of Engineering, Mahindra University Batch of 2024"
            thumbnail={mu}
          />

          </SimpleGrid>

        <br></br>
        <Heading as="h3" variant="section-title">
          Notable Coursework
        </Heading>

        <Section>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Optimization for Artificial Intelligence
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Discrete Mathematics Structures
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Data Structures and Algorithms
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Programming Workshop
              </Button>

              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Computer Science
              </Button>
        </Section>

       


>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
  </Layout>
)

export default Works
