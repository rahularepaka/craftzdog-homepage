import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'
import { Player } from 'video-react'

const Work = () => (
  <Layout title="agribot">
    <Title>
      AgriBot <Badge>March 2018 - May 2018</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project AgriBot - Companion</Center>
    </Heading>
    <P>
      AgriBot is made be to be compact, efficient and user-friendly, all at the
      same time. The droid consists of multiple Lego-provided motors and
      sensors. Apart from this, the brain power of Arduino has also been
      integrated. The droid can be powered on Solar energy as well with suitable
      energy storage packs.
      <br></br>
    </P>
    <br></br>
    <Meta>Report</Meta>
    <span>
      <a href="https://drive.google.com/file/d/1nKzlaycB-MGX1prUDDA4mHtvG9mB7DBV/view?usp=sharing">
        Click here to read the report{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Need for Automation in Agriculture</Center>
    </Heading>
    <P>
      The companion is a prototype of what could be the key to a new era. With
      advanced terrain nagivation potential and effective compactness, the
      companion is not only useful on Earth, but also on planets we wish to
      terraform. The droid can prove exponentially useful in extra-terrestrial
      ventures, With reqular production of the droid along with intention of
      use, the droids can be sold for affordable prices. The droid comes with
      multiple sensors to make sure that all damages can be avoided - After all.
      prevention is better than cure. Lego mindstorm combined with the computing
      powers of Arduino is indeed an effective idea.
    </P>
    <br></br>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>Technical Details of Project AgriBot - Companion</Center>
    </Heading>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>1. Lego Sensors</Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/gyro.png" alt="soil" />
      <WorkImage src="/images/works/uv.png" alt="soil" />
      <WorkImage src="/images/works/color.png" alt="soil" />
      <WorkImage src="/images/works/light.png" alt="soil" />
      <WorkImage src="/images/works/sound.png" alt="soil" />
      <WorkImage src="/images/works/touch.png" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>2. Arduino-Based Sensors</Center>
    </Heading>
    <li>Soil Moisture Sensors</li>
    <li>Temperature/Humidity Sensors</li>
    <li>Water Level Sensor</li>
    <li>Carbon Monoxide Sensor</li>
    <li>TFT Touch Screen Shield</li>
    <li>Real-time Clock</li>
    <br></br>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>3. Image Processing : Object Detection</Center>
    </Heading>

    <SimpleGrid columns={1} gap={1}>
      <WorkImage src="/images/works/obj.gif" alt="drone" />
    </SimpleGrid>
    <P>
      Tensor flow detection software is a smart Recognition app that is able to
      see objects Through a camera and determine what exactly It is.
    </P>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>4. Modular Mechnical Parts</Center>
    </Heading>

    <SimpleGrid columns={1} gap={1}>
      <WorkImage src="/images/works/mod.png" alt="drone" />
    </SimpleGrid>

    <P>
      Companion has modular parts that can be replaced during the Appropriate
      season. The plough, weed drill and the harvester are Removable and
      reattachable for maximum convenience.
    </P>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>AgriBot - Teaser Video</Center>
    </Heading>

    <Player playsInline src="/images/works/agribot/main.mp4" />
    <br></br>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>AgriBot - V1</Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/agribot/10.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/12.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/13.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/11.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/14.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/15.jpg" alt="clara" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>AgriBot - V2</Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/agribot/1.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/3.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/4.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/5.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/6.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/7.jpg" alt="clara" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>AgriBot - National Robotics Olympiad 2018 UAE</Center>
    </Heading>
    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/agribot/8.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/9.jpg" alt="clara" />
    </SimpleGrid>
    <P>
      Won 1st Place at the National Robotics Olympiad 2018 and represented UAE
      at the World Robot Olympiad 2018 at Thailand.
    </P>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>AgriBot - UOWD 2018</Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/agribot/20.jpg" alt="clara" />
      <WorkImage src="/images/works/agribot/19.jpg" alt="clara" />
    </SimpleGrid>
    <P>
      Won 1st Place at the UOWD 2018.
    </P>
  </Layout>
)

export default Work
