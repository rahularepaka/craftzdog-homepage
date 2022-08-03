import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'
import { Player } from 'video-react'

const Work = () => (
  <Layout title="Lane Detection">
    <Title>
      Lane Detection <Badge>March 2022 - May 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Real time Lane Detection</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/lane-detection">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <P>
      We will train and construct a model that helps detect lanes on straight
      and curved roads based on the raw pixels captured by the single
      front-facing camera.
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/lane/1.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={15} my={6}>
      <Center>
        This code was part of the Machine Learning in Python Course Project{' '}
      </Center>
    </Heading>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Requirements</Center>
    </Heading>
    <P>
      <li>OpenCV</li>
      <li>Numpy</li>
      <li>Tensorflow</li>
      <li>Keras</li>
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Deployment</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/lane/2.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Dataset</Center>
    </Heading>
    <P>
      This project demonstrates lane detection using a single image from a road
      dataset. The lanes are marked by a solid white line (on the right) and
      alternating short line segments with dots (on the left).<br></br>
      <br></br>
      <a href="https://www.kaggle.com/code/soumya044/lane-line-detection/data">
        Lane Detection Kaggle : Dataset link{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/lane/3.png" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Computer Vision Techniques</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/lane/4.png" alt="soil" />
      <WorkImage src="/images/works/lane/5.png" alt="soil" />
      <WorkImage src="/images/works/lane/6.png" alt="soil" />
      <WorkImage src="/images/works/lane/7.png" alt="soil" />
      <WorkImage src="/images/works/lane/8.png" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={14} my={6}>
      <Center>Testing with Simulators</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/lane/9.png" alt="soil" />
      <WorkImage src="/images/works/lane/10.png" alt="soil" />
      <WorkImage src="/images/works/lane/11.png" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={14} my={6}>
      <Center>Testing Videos (Kinda Failed) </Center>
    </Heading>
    <Player playsInline src="/images/works/lane/12.mp4" />
    <br></br>
    <Player playsInline src="/images/works/lane/13.mp4" />
  </Layout>
)

export default Work
