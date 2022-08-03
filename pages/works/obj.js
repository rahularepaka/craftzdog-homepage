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
  <Layout title="Object Detection">
    <Title>
      Object Detection <Badge> August 2021 - August 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project YOLOv4 Object Detection - WebApp using Streamlit</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/ObjectDetectionYolov4Web">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <P>
      Object Detection using coco.names dataset , weights and configuration
      files of real time object detection algorithm YOLOv4.To change the weights
      and configurations file , you may do so by changing the file directory of
      the same.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>The WebApp</Center>
    </Heading>
    <br></br>
    <Player playsInline src="/images/works/obj/1.mp4" />

    <Heading as="h4" fontSize={14} my={6}>
      <Center>Requirements</Center>
    </Heading>
    <P>
      <li>matplotlib==3.4.2</li>
      <li>numpy==1.21.1</li>
      <li>opencv-python-headless==4.5.3.56</li>
      <li>streamlit==0.84.2</li>
      <li>streamlit_webrtc==0.25.0</li>
      <li>typing_extensions==3.10.0.0</li>
      <li>openpyxl</li>
    </P>

    <Heading as="h4" fontSize={14} my={6}>
      <Center>COCO Dataset</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/obj/2.png" alt="soil" />
    </SimpleGrid>

    <Heading as="h4" fontSize={14} my={6}>
      <Center>Usage</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/obj/3.png" alt="soil" />
    </SimpleGrid>
  </Layout>
)

export default Work
