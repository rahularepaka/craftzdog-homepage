//import NextLink from 'next/link'
import {
  Heading,
  SimpleGrid,
  List,
  Link,
  Button,
  Box,
  Image,
  Icon,
  Container
} from '@chakra-ui/react'

import NextLink from 'next/link'

//import { ChevronRightIcon } from '@chakra-ui/icons'
//import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoMicrosoft
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

import { WorkGridItem } from '../components/grid-item'

import Yolo from '../public/images/contents/yolo.jpeg'
// import car from '../public/images/contents/car.png'
import laser from '../public/images/contents/laser.jpg'
// import food from '../public/images/contents/food.jpg'
// import mask from '../public/images/contents/mask.png'
// import alcohol from '../public/images/contents/alcohol.jpg'
// import em from '../public/images/contents/em.jpg'
// import dolly from '../public/images/contents/dolly.jpg'
import clara from '../public/images/contents/clara.jpg'
// import agri from '../public/images/contents/agri.jpg'
// import laser2 from '../public/images/contents/laser2.jpg'
// import robocon1 from '../public/images/contents/robcon1.jpg'
// import pollution1 from '../public/images/contents/pollution.jpg'
// import atv from '../public/images/contents/atv.webp'
import lane from '../public/images/contents/landet.png'

const Home = () => (
  <Layout>
    <br />
    <br />

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <br />
        <Heading as="h2" variant="page-title">
          Rahul Arepaka
        </Heading>
        <p>Undergraduate Robotics Researcher (Agri-Tech)</p>
        
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
          maxWidth="150px"
          display="inline-block"
          borderRadius="full"
          src="/images/me4.jpg"
          alt="Profile image"
        />
      </Box>
    </Box>

    {/* <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <li>Full Name : Sai Phani Rahul Arepaka</li>
      <li>DOB : 05-October-2001</li>
      <li>Zodia Sign : Libra</li>
      <li>
        <a href="https://www.urbandictionary.com/define.php?term=Rahul">
          Urban Dictionary
        </a>
      </li>
    </Section> */}

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <p>
        I am a III-year Computer Science Undergraduate Student at{' '}
        <a href="https://www.mahindrauniversity.edu.in/">
          <b>
            <u>Ecole Centrale School of Engineering, Mahindra University</u>
          </b>
        </a>
        . I am quite proficient in C/C++, Python, Arduino, Raspberry Pi, Nvidia
        Jetson Nano, Image Processing, and Robotics Operating Systems. <br></br>
        <br></br>I have good knowledge in the fields of Machine Learning, Deep
        Learning, and Robotics. I have a keen interest in High-Performance
        Computing, Rapid Product Engineering, Reverse Engineering, Deep
        Learning, and Embedded Systems. <br></br>
        <br></br>
        Currently working on Vision-based Laser Weeding Robots with{' '}
        <a href="https://farming-revolution.com/">
          <b>
            <u>Farming Revolution GmbH (Deepfield Robotics, Bosch)</u>
          </b>
        </a>
        . I always love to explore new ways to make things efficient and
        effective. I try to challenge myself to be better than before with the
        latest technologies and research. <br></br>
        <br></br>Apart from researching, I love to organize national-level
        competitions at my university, building FPV drones, aquscape setups,
        Gaming PCs, being a Robotics Judge at the First Lego League, and World
        Robotics Olympiad, and also I am a die-heart fan of Music and EDM.
      </p>

      {/* <Container>
        <Box my={4} align="center">
          <NextLink href="https://drive.google.com/file/d/1Xqn4qYNiPXKIVoS0IKgzHxub86FI71HR/view?usp=sharing">
            <Button colorScheme="teal">Resume ></Button>
          </NextLink>
        </Box>
      </Container> */}
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Featured Projects
      </Heading>
      <br></br>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkGridItem
          id="lane"
          title="Lane Detection using OpenCV"
          thumbnail={lane}
          href=""
        />

        <WorkGridItem
          title="Object Detection using YOLOv4 and Streamlit"
          thumbnail={Yolo}
          id="obj"
          href="https://github.com/rahularepaka/ObjectDetectionYolov4Web"
        />

        <WorkGridItem
          title="Laser Weeding for FarmBot"
          thumbnail={laser}
          id="laser"
          href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
        />

        <WorkGridItem
          id="clara"
          title="Cable Lifted Automated Robot for Agriculture"
          thumbnail={clara}
          href=""
        />
      </SimpleGrid>

      <Container>
        <Box my={6} align="center">
          <NextLink href="/projects">
            <Button colorScheme="teal">See All Projects &gt; </Button>
          </NextLink>
        </Box>
      </Container>
    </Section>

    {/* <Section delay={0.3}> */}
      {/* <Heading as="h3" variant="section-title">
        Social
      </Heading> */}
      {/* <List>
        <Link href="https://github.com/rahularepaka" target="_blank">
          <Button
            variant="ghost"
            //colorScheme="teal"
            align="center"
            leftIcon={<Icon as={IoLogoGithub} />}
          ></Button>
        </Link>

        <Link href="https://www.linkedin.com/in/rahul-arepaka/" target="_blank">
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
      </List> */}
    {/* </Section> */}
  </Layout>
)

export default Home
