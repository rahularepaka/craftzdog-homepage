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
  <Layout title="emc2">
    <Title>
      E=MC2 <Badge>July 2019 - August 2019</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project E=MC2 : Earn through Massage Card Collector</Center>
    </Heading>
    <P>
      Our project utilizes the vast capabilities of the Arduino platform to
      provide the best performance. The project consists of various individual
      elements such as the RFID Reader, Motor Driver, Color sensor, etc.
      combined together with the help of Arduinos opensource libraries.
      <br></br>
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/emc2/1.jpg" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Inspiration</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/emc2/2.png" alt="soil" />
    </SimpleGrid>
    <P>
      Since we and our friends live in Karama and Bur Dubai, we get to see the
      use and spread of these massage cards on a daily basis. Seeing such cards
      on the street not only irritated us but made us feel like Dubai was losing
      its charm. Hence, we decided to tackle this issue.
    </P>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Working</Center>
    </Heading>
    <P>
      Since we are using Arduino Mega and TCS RGB Color sensor with white light
      filter the sensor allows the Arduino Mega to sort it whether it is a
      massage card or visiting card by passing the card through the intake
      system the sensor reads the value whether card has many colors and based
      on the motor rotations which calculates the dimensions of the card and
      thickness by the change in power of the motor allows us to sort out the
      cards as the machine programmed in a such a way where it calculates the
      mean values of white and non-white color values and as massage cards have
      many colors and specific thickness and where visiting cards have less
      colors and different reflecting values.
      <br></br>
      <br></br>
      Our machine uses a color sensor, which can read different values for the
      color on the card. As most visiting cards contain over 50% of white color
      on them, this can be used to differentiate them between massage cards. The
      machine, based on input from the color senor, will reject or accept cards
      based on the percentage on white color on it. Also, visiting cards are
      generally thicker than massage cards. This property is also used to
      differentiate the cards. It basically works like the vending machine where
      it would check whether is it 5 AED note or 10 AED notes.
    </P>
    <br></br>
    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/emc2/5.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/18.jpg" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>The flowchart and Programming Logic</Center>
    </Heading>
    <P>
      The program written with the help of the Arduino IDE is divided into
      smaller functions for individual functions. The basic flowchart of the
      program is given below:
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/emc2/27.png" alt="soil" />
    </SimpleGrid>
    <br></br>
    <Heading as="h4" fontSize={12} my={6}>
      <Center>The Libraries</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/emc2/28.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={12} my={6}>
      <Center>Main Code</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/emc2/29.png" alt="soil" />
    </SimpleGrid>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Gallery</Center>
    </Heading>
    <SimpleGrid columns={3} gap={2}>
      <WorkImage src="/images/works/emc2/3.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/4.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/5.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/8.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/9.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/10.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/11.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/7.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/6.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/13.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/14.jpg" alt="soil" />
      <WorkImage src="/images/works/emc2/15.jpg" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Videos</Center>
    </Heading>
    <SimpleGrid columns={3} gap={2}>
      <Player playsInline src="/images/works/emc2/24.mp4" />
      <Player playsInline src="/images/works/emc2/25.mp4" />
      <Player playsInline src="/images/works/emc2/26.mp4" />
    </SimpleGrid>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Media Coverage</Center>
    </Heading>
    <Meta>khaleej Times</Meta>
    <span>
      <a href="https://www.khaleejtimes.com/article/dubai-students-invent-machine-to-get-rid-of-massage-card-trash">
        Dubai students invent machine to get rid of massage card trash - Khaleej
        Times{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <Meta>ARN News Center</Meta>
    <span>
      <a href="https://www.arnnewscentre.ae/news/uae/dubai-students-unveil-machine-to-turn-massage-cards-into-points/">
        STUDENTS UNVEIL MACHINE TO TURN MASSAGE CARDS INTO POINTS - ARN{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <Meta>lovin Dubai</Meta>
    <span>
      <a href="https://lovin.co/dubai/en/community/massage-cards-dubai">
        A Couple Of Dubai Students May Have Ingeniously Solved The Massage Card
        Dilemma{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <Meta>Mashable</Meta>
    <span>
      <a href="https://me.mashable.com/culture/6657/dubais-massage-card-madness-may-finally-have-a-solution">
        Dubai's massage card madness may finally have a solution{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>Gemsoo-alwarqa</Meta>
    <span>
      <a href="https://www.gemsoo-alwarqa.com/Student-Life/Latest-News/OOW-students-invent-machine-to-get-rid-of-massage-card-trash">
        OOW Students Invent Machine to Get Rid Of Massage Card Trash{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Podcast - Dubai Eye</Center>
    </Heading>
    <Meta>Dubai Eye</Meta>
    <span>
      <a href="https://omny.fm/shows/business-breakfast/swallows-massage-cards">
        Swallows Massage Cards{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <br></br>
    <Player playsInline src="/images/works/emc2/e.mp3" />
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Podcast - City 1016</Center>
    </Heading>
    <Player playsInline src="/images/works/emc2/e1.mp4" />
    <br></br>
    <Player playsInline src="/images/works/emc2/e2.mp4" />
    <br></br>
    <Player playsInline src="/images/works/emc2/e3.mp4" />
  </Layout>
)

export default Work
