import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="agribot">
    <Title>
      Dolly <Badge>June 2018 - October 2018</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Dolly - MUR Shipping</Center>
    </Heading>
    <P>
      Project Dolly is a proof of concept which utilises the cable suspended
      system to move the robot around in the 3D environment using coordinate
      system. Dolly was used in shipping containers to clean the interiors of
      the walls using high pressure water and modular motor units.
      <br></br>
    </P>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Testing Robots </Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/dolly/1.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/2.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/3.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/4.jpg" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>Dolly - The Robot</Center>
    </Heading>
    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/dolly/5.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/6.jpg" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>Dolly Environment - Scaled Down Version</Center>
    </Heading>

    <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/dolly/11.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/14.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/9.jpg" alt="soil" />
      <WorkImage src="/images/works/dolly/10.jpg" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>Dolly Environment - Shipping Container</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/dolly/16.jpg" alt="soil" />
    </SimpleGrid>
  </Layout>
)

export default Work
