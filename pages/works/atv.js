import { Badge, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'
import { Player } from 'video-react'

const Work = () => (
  <Layout title="Autonomous Electric ATV">
    <Title>
      Autonomous Electric ATV <Badge> August 2022 - Present</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Autonomous Electric ATV</Center>
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
