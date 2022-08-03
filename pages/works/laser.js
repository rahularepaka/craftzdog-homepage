import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="laserweeding">
    <Title>
      Laser Tool for Killing Weeds <Badge>April 2021 - June 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Cyclops : Laser Tool for Killing Weeds</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/Project-Cyclops">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/23.png" alt="soil" />
    </SimpleGrid>
    <P>
      This is all-new laser killing weed removal for the Farmbot designed by our
      team. This tool is designed to destroy weeds using Thermal Technique :
      Laser by detecting weeds using Camera and weed detection The Camera will
      detect for weeds and give those coordiantes to the farmbot and give
      add/subtract the off-set of the laser mount location and turn on the laser
      for 500ms and spray water on the location to complete the sequence
    </P>
    <Heading as="h4" fontSize={15} my={6}>
      <Center>Prologue | Farmbot Weeder</Center>
    </Heading>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Manual Weed Removal</Center>
    </Heading>
    <P>
      The current process of removing weeds is manual process by identifying the
      weeds and removing them is extremly tiring and time-consuming.
      <li>Disadvantages</li>
      <li>Removing incorrect plants</li>
      <li>Time Consuming Process</li>
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/1.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Weeder on Farmbot</Center>
    </Heading>
    <P>
      It works by driving the tool vertically into the soil in order to push any
      small weeds under the soil, and disrupt their young fragile root systems.
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/2.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Inspiration</Center>
    </Heading>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/4.png" alt="soil" />
    </SimpleGrid>
    <P>
      The experiment showed that laser treatment of the apical meristems caused
      significant growth reduction and in some cases had lethal effects on the
      weed species The biological efficacy of the laser control method was
      related to wavelength, exposure time, spot size and laser power.
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/3.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>FarmBot</Center>
    </Heading>
    <P>
      FarmBot is a robotic open hardware system that assists anyone with a small
      plot of land and a desire to grow food with planting, watering, soil
      testing, and weeding it. It uses a raspberry Pi, Arduino, and other
      awesome components, including weather resistant materials. Currently,
      there are over 300 devices in operation all around globe
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/5.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={17} my={6}>
      <Center>Laser Killing Weeding Tool</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/7.png" alt="soil" />
    </SimpleGrid>
    <P>
      The Camera will detect for weeds and give those coordiantes to the farmbot
      and give add/subtract the off-set of the laser mount location and turn on
      the laser for 500ms and spray water on the location to complete the
      sequence
    </P>
    <Heading as="h4" fontSize={17} my={6}>
      <Center>Technical Details</Center>
    </Heading>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Programming the Arduino using Arduino IDE</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/16.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Wiring</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/15.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Programming the WebApp</Center>
    </Heading>
    <P>
      Step 1 : Visit the Website my.farm.bot and login using farmbot account
      details
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/8.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 2: Select on the sequences icon from the webapp and select new
      sequence
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/9.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 3: Upon clicking on the new sequence,then click on “Add Command” and
      then select “Move” and choose weeds from the drop-down list
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/10.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 4: Click on “Add Command” and then select “Control Pheripheral” and
      choose Port where the Laser is connect,choose Digital Mode and set it to
      “ON”
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/11.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 5: Select on the “Add Command” and choose “WAIT” command and input
      500ms (ie, 5s)
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/12.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 6: Select on the “Add Command” and choose “Choose Peripherals” and
      select the Pheripherals port and set mode to “OFF”
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/13.png" alt="soil" />
    </SimpleGrid>
    <P>
      Step 7: Select on the “Add Command” and choose “Water Plant” and choose
      Weed LocaƟon from the drop-down list
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/14.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Weed Detection</Center>
    </Heading>
    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/laser/17.png" alt="soil" />
      <WorkImage src="/images/works/laser/18.png" alt="soil" />
    </SimpleGrid>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/19.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={17} my={6}>
      <Center>Photos of Laser Mount and Working</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/laser/20.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={17} my={6}>
      <Center>Testing Videos</Center>
    </Heading>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/38SfoGEeuGA"
      title="Laser 1   Test"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/uzuAaT0RbTk"
      title="Laser + Water Test"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/hvryX2yWKMo?list=PLmqQlLNnAZeNxKtvdTFGKsISi_beS0jqv"
      title="Plant Test   1 + Water"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/CZevGsG4VxA"
      title="Plant Test   2 + Water"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/4mvnTx-ELzc"
      title="Plant Test   3 + Water"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/tyxHVaaTqK8?list=PLmqQlLNnAZeNxKtvdTFGKsISi_beS0jqv"
      title="Plant Test   4 + Water"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/y0UsBOgl0RE?list=PLmqQlLNnAZeNxKtvdTFGKsISi_beS0jqv"
      title="Top View Laser Test"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>{' '}
    <br></br>
    <iframe
      width="735"
      height="400"
      src="https://www.youtube.com/embed/mm0UvqF8U7o?list=PLmqQlLNnAZeNxKtvdTFGKsISi_beS0jqv"
      title="Laser Test 3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <br></br>
    <Heading as="h4" fontSize={17} my={6}>
      <Center>Team Members</Center>
    </Heading>
    <br></br>
    <Heading as="h9" fontSize={12} my={6}>
      <Center> Rahul Arepaka | Project Lead and Designer</Center>
      <br></br>
      <Center> Ethan Hadimani | 3D Mount Designer</Center>
      <br></br>
      <Center> Atin Sakkeer | Programmer</Center>
      <br></br>
      <Center> Sanjay Pramod | Farmbot Sequence Programmer</Center>
    </Heading>
  </Layout>
)

export default Work
