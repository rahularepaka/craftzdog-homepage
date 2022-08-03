import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="maskdetection">
    <Title>
      Mask Detection with QR and BEEP Alert System{' '}
      <Badge>March 2021 - August 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Mask Detection with QR and BEEP Alert System</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/maskdetection">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <P>
      Covid 19 Edition Mask Detection and Alert System using OpenCV and Numpy
      libraries in Python and Trained using 100+ Images for the detection of the
      mask. Before entering the building, you need to show your ID Card to the
      system for storing and scanning purposes. If the mask is not detected then
      it saves the picture of the person and updates on the database and alerts
      the health and safety department of the company
    </P>
    <br></br>
    <P>
      Mask Detection and Alert System using OpenCV and Numpy libraries in Python
      and Trained using 100+ Images for the detection of the mask. Before
      entering the building, you need to show your ID Card to the system for
      storing and scanning purposes. If the mask is not detected then it saves
      the picture of the person and updates on the database and alerts the
      health and safety department of the company.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Requirements</Center>
    </Heading>
    <P>
      <li>OpenCV</li>
      <li>Numpy</li>
      <li>Pyzbar</li>
      <li>Winsound</li>
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Haar Cascades</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/mask/haar.jpeg" alt="soil" />
    </SimpleGrid>
    <P>
      Enter Haar classifiers, classifiers that were used in the first real-time
      face detector. A Haar classifier, or a Haar cascade classifier, is a
      machine learning object detection program that identifies objects in an
      image and video.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Calculating Haar Features</Center>
    </Heading>
    <P>
      The first step is to collect the Haar features. A Haar feature is
      essentially calculations that are performed on adjacent rectangular
      regions at a specific location in a detection window. The calculation
      involves summing the pixel intensities in each region and calculating the
      differences between the sums.These features can be difficult to determine
      for a large image. This is where integral images come into play because
      the number of operations is reduced using the integral image.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Creating Integral Images</Center>
    </Heading>
    <P>
      Without going into too much of the mathematics behind it (check out the
      paper if youre interested in that), integral images essentially speed up
      the calculation of these Haar features. Instead of computing at every
      pixel, it instead creates sub-rectangles and creates array references for
      each of those sub-rectangles. These are then used to compute the Haar
      features.Its important to note that nearly all of the Haar features will
      be irrelevant when doing object detection, because the only features that
      are important are those of the object.
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Adaboost Training</Center>
    </Heading>
    <P>
      Adaboost essentially chooses the best features and trains the classifiers
      to use them. It uses a combination of “weak classifiers” to create a
      “strong classifier” that the algorithm can use to detect objects. Weak
      learners are created by moving a window over the input image, and
      computing Haar features for each subsection of the image. This difference
      is compared to a learned threshold that separates non-objects from
      objects. Because these are “weak classifiers,” a large number of Haar
      features is needed for accuracy to form a strong classifier.
    </P>
  </Layout>
)

export default Work
