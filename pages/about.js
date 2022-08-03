//import NextLink from 'next/link'
import {
  Link,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon
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
  IoLogoMicrosoft,
  IoLogoGoogle,
  IoLogoBitcoin,
  IoLogoTwitter,
  IoGameController,
  IoLogoDesignernews,
  IoMusicalNote,
  IoGameControllerOutline,
  IoMicOffOutline,
  IoLaptopOutline,
  IoTvOutline,
  IoLaptop
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'



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
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            src="/images/me4.jpg"
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
        <li>Many of my friends said this is so true about me : <a href="https://www.urbandictionary.com/define.php?term=Rahul">Urban Dictionary</a></li>
      </Section>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About 
        </Heading>
        <p>A III-Year student pursing Computer Science and Engineering at Ecole Centrale School of Engineering, Mahindra University.
          <br /> <br />Currently, working with Farming Revolution GmbH (Deepfield Robotics, Bosch) on a Research Project on Vision Based Laser Targeting System for Weeding in Mobile Robots.
          <br /><br />Previously, worked on Laser Weeding for CNC-based farmbot with an open-source organization called FarmBot Inc.
          <br /><br />I was part of World Robotics Olympiad as Team UAE in 2018 ,FIRST Tech Challenge and Judge at FIRST Lego League in 2019/2020 and World Robotics Olympiad in 2021.</p>

      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Sweet Short Introduction
        </Heading>
        <p>🌱 20-year-old CS Student trying to build/research on robots in the field of Agriculture and turn into Agritech Startup with RaaS 🤖<p/>
</p><br></br>

<p>⚡ Currently, working with Farming Revolution GmbH (Deepfield Robotics, Bosch) on a Research Project on Laser Weeding in Moblie Robots using Pan-Tilt System in Mahindra University ☘️
</p><br></br>
<p>😅 Up to this point, best regret :
</p><br></br>
<li>Bunking classes in High School to work on Cable Suspended Robots for Agriculture in the robotics lab led me to win the National Robotics Olympiad 2018, represent the UAE, and ranked 14th place in the World Finals in Thailand 2018 🌿
</li><br></br>
<li>Rejected abroad university acceptance letters to study in India, which could be the best place to work on agriculture field in the world (I feel) 🧑‍🏭
</li><br></br>

👨‍🏭 Open to working on Collaboration Robotics Research Projects<br></br>
      </Section>




        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          My Setup 
        </Heading>
        <li>{<Icon as={IoLaptopOutline}/>} Custom PC Build with i5-8500K, 16GB Cosiar Vengence RGB RAM , MSI GTX1050Ti 4GB, Factual Design Case, 650W PSU, MSI Gaming Mouse and 60% Mechanical Keyboard</li>
        <li>{<Icon as={IoLaptop}/>} Asus ROG Zephyrus M16 with i9-11800H, 32GB RAM, 16:10 165Hz , RTX 3070 8GB, 2TB SSD</li>
        <li>{<Icon as={IoTvOutline}/>} Raspberry Pi Model B+, Arduino UNO, Arduino MEGA, and Nvidia Jetson Nano</li>


      
      </Section>

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
