import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="Self Driving Car Dashboard">
    <Title>
      Self Driving Car Dashboard <Badge>June 2021 - July 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Self Driving Car Dashboard</Center>
      <br></br>
      <Center>
        <a href="https://github.com/crypto-code/Car-Dashboard-Studio">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <P>
      This project is a Android Studio Project with Kotlin as Front-End and
      Python as Back-End using Chaquopy 🐼.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>The Dashboard</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/1.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Layout</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/2.png" alt="soil" />
      <WorkImage src="/images/works/daa/3.png" alt="soil" />
      <WorkImage src="/images/works/daa/4.png" alt="soil" />
      <WorkImage src="/images/works/daa/5.png" alt="soil" />
      <WorkImage src="/images/works/daa/6.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>User Flow</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/7.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Facial Recognition</Center>
    </Heading>
    <P>
      The Facial Recognition used in this app runs entirely using the
      face_recognition library in Python. The model used for facial recognition
      has a 99.38% accuracy on the Labelled Faces in the Wild dataset. Python is
      linked to Android Studio using the open source Chaquopy plugin. All facial
      recognition data is stored on a Firebase database. During the facial
      recognition stage, the front camera of the Android device is used to
      capture the image. Then the image is passed as a raw byte stream to the
      Python backend to extract the facial features. This is then compared
      against the feature encoding stored in the Firebase database to validate
      the face.
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/8.png" alt="soil" />
      <WorkImage src="/images/works/daa/9.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>API Calls</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/10.png" alt="soil" />
      <WorkImage src="/images/works/daa/11.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Unlocking Car using Bluetooth, Arduino and Relay</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/daa/12.png" alt="soil" />
    </SimpleGrid>
  </Layout>
)

export default Work
