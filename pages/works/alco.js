import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="emc2">
    <Title>
      Alcohol Detection with Engine Lock{' '}
      <Badge>September 2019 - October 2019</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Alcohol Detection with Engine Lock</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/arduino_Alcoholdetection">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Abstract</Center>
    </Heading>
    <P>
      We usually come across drink and driving cases where drunk drivers crash
      their cars under the influence of alcohol causing damage to property and
      life. So here we propose an innovative system to eliminate such cases. Our
      proposed system would be constantly monitoring the driver breath by
      placing it on the driver wheel or somewhere the driver’s breath can be
      constantly monitored by it.
      <br></br>
      <br></br>
      So, if a driver is drunk and tries to drive, the system detects alcohol
      presence in his/her breath and locks the engine so that the vehicle fails
      to start. The system uses an Arduino, PC fan, alcohol sensor, and buzzer.{' '}
      <br></br>
      <br></br>
      The Arduino (microcontroller) on encountering high alcohol signal from the
      alcohol sensor indicates alcohol detection through buzzer and stops the
      Fan to demonstrate as engine locking. When alcohol is detected after
      engine starting, the system locks the engine at that time. <br></br>
      <br></br>This Project presents an innovative way of protecting automobiles
      from drunken drivers for safeguarding them by using IOT.
      <br></br>
      <br></br>Programming language used in the Arduino is C++.
      <br></br>
    </P>
    <br></br>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Objective</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/alco/1.jpg" alt="soil" />
    </SimpleGrid>
    <P>
      Now a day&#39;s every system is automated in order to face new challenges.
      In the present days Automated systems have fewer manual operations,
      flexibility, reliability and accurate. Due to this demand every field
      prefers automated control systems. We usually come across drink and
      driving cases where drunk drivers crash their cars under the influence of
      alcohol causing damage to property and life. So here we propose an
      innovative system to eliminate such cases. <br></br>
      <br></br>Our proposed system would be constantly monitoring the driver
      breath by placing it on the driver wheel or somewhere the driver’s breath
      can be constantly monitored by it. So, if a driver is drunk and tries to
      drive the system detects alcohol presence in his/her breathe and locks the
      engine so that the vehicle fails to start. In another case if the driver
      is not drunk while he starts the vehicle and engine is started but he/she
      drinks while driving the sensor still detects alcohol in his breath and
      stops the engine so that the car would not accelerate any further and
      driver can steer it to roadside. <br></br>
      <br></br>So, the alcohol sensor is used to monitor uses breath and
      constantly sends signals to the microcontroller.
    </P>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Bill of Materials</Center>
    </Heading>
    <P>
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Arduino UNO</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>12V Fan</td>
          <td>$2</td>
        </tr>
        <tr>
          <td>1K/330/220 Ohm Resistors </td>
          <td>$3</td>
        </tr>
        <tr>
          <td>Battery 12V Supply </td>
          <td>$4</td>
        </tr>
        <tr>
          <td>MQ3 Alcohol Sensor </td>
          <td>$9</td>
        </tr>
        <tr>
          <td>Breadboard </td>
          <td>$1</td>
        </tr>
        <tr>
          <td>Jumper Cables M/M-M/F-F/F </td>
          <td>$2</td>
        </tr>
        <tr>
          <td>Toggle Switch </td>
          <td>$1</td>
        </tr>
        <tr>
          <td>Miscellous </td>
          <td>$5</td>
        </tr>
      </table>
    </P>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Construction</Center>
    </Heading>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/alco/6.png" alt="soil" />
    </SimpleGrid>
    <P>
      The device is constructed using the above-mentioned apparatus following
      the circuit diagram shown above.
    </P>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Working</Center>
    </Heading>
    <P>
      An alcohol sensor recognizes the mindfulness of liquor gas noticeable all
      around and analog voltage is an output reading. The sensor can actuate at
      temperatures going from -10 to 50° C with a power supply is under 150amp
      to 5V. The detecting range is from 0.04 mg/L to 4 mg/L, which is
      appropriate for breathalyzers. There is a warming system inside the
      sensor, which is comprised of aluminum oxide, tin dioxide. It has warm
      curls to create warmth, and along these lines it is utilized as a heating
      sensor. The beneath outline demonstrates the stick chart and the setup of
      the MQ-3 alcohol sensor. <br></br>
      <br></br>The MQ-03 alcohol sensor comprises of a tin dioxide (SnO2), a
      point of view layer inside aluminum oxide smaller scale tubes (measuring
      cathodes) and a warming component inside a tubular packaging. The end face
      of the sensor is encased by a stainless-steel net and the posterior holds
      the association terminals. Ethyl liquor introduce in the breath is
      oxidized into acidic corrosive going through the warmth component. With
      the ethyl liquor course on the tin dioxide detecting layer, the protection
      diminishes. <br></br>
      <br></br>When alcohol detected by the sensor, the micro controller sends
      required voltage to the buzzer, so that it sounds continuously and
      percentage of alcohol would be monitored through the serial display. So,
      it sends an alert to the vehicle owner.
    </P>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Conclusion</Center>
    </Heading>
    <P>
      The “Alcohol Breath Analyzer using IOT Technology with engine lock” was
      designed such that the driver alcohol content is transmitted to the owner
      on his mobile phone as a short message (SMS) at his request.
      <br></br>
      <br></br>The microcontroller gets the information regarding the alcohol
      through the alcohol sensor and alerts about the condition being sensed
      using Buzzer and automatically the motors of the vehicle turns OFF using
      relay switch
    </P>
    <br></br>
    <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/alco/2.jpg" alt="soil" />
      <WorkImage src="/images/works/alco/3.jpg" alt="soil" />
      <WorkImage src="/images/works/alco/4.jpg" alt="soil" />
    </SimpleGrid>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>The Conclusion</Center>
    </Heading>
    <P>
      In a future rendition of the model, a system wherein an alert could be
      sent via a SIM module to the user’s emergency contacts to inform them of
      his\her condition. Also, an LCD display can be added to make the system
      look more visually appealing.
    </P>
    <br></br>
    <Heading as="h9" fontSize={12} my={6}>
      <Center> Rahul Arepaka | rahul20ucse156@mahindrauniversity.ac.in</Center>
      <br></br>
      <Center> Sanjay Pramod | sanjaypramod2002@gmail.com</Center>
    </Heading>
  </Layout>
)

export default Work
