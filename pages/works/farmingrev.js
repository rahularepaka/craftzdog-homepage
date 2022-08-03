import { Badge, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="Object Detection">
    <Title>
      Vision based laser targeting system <Badge> October 2021 - Present</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>
        Vision based laser targeting system for continous weeding in Moblie
        Robots
      </Center>
      <br></br>
      {/* <Center>
        <a href="https://github.com/rahularepaka/ObjectDetectionYolov4Web">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center> */}
    </Heading>
    <Center>
      <Heading as="h4" fontSize={16} my={6}>
        {' '}
        👷‍♂️ Work in Progress 👷‍♂️
      </Heading>
    </Center>
  </Layout>
)

export default Work
