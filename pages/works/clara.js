import {
  Badge,
  SimpleGrid,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import "../../node_modules/video-react/dist/video-react.css"; // import css
<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react';
import { Player } from 'video-react';

const Work = () => (
  <Layout title="clara">
      <Title>
        Clara <Badge>May 2018 - Novemeber 2018</Badge>
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Project Clara</Center>
      </Heading>
      <P>
        Clara is robotics based system which enables the robot to move around agriculture and greenhouse environments using strings/cable.
        Clara stands for Cable lifted Automated Robot for Agriculture which is a CDPR (Cable Driven Parallel Robot).
      <br></br>
        Clara was built to combact the rise of soil compaction in feilds of farming.
        <br></br>
        </P>

        <br></br>
        <Meta>Report</Meta><span><a href="https://github.com/rahularepaka/Project-Clara/blob/main/Team%20Emergence%20Report%20Clara.pdf">Click here to read the report </a><ExternalLinkIcon></ExternalLinkIcon></span>
        <br></br>
        <Meta>Sponsorship</Meta><span><a href="https://github.com/rahularepaka/Project-Clara/blob/main/Team%20Emergence%20-%20Sponsorship%20Proposal.pdf">Click here to read the Sponsorship Proposal </a><ExternalLinkIcon></ExternalLinkIcon></span>
        <br></br>

        <Heading as="h4" fontSize={16} my={6}>
        <Center>Soil Compaction</Center>
      </Heading>
      <P>
        A leading cause of Soil compaction is the use of heavy land-based agricultural machinery which leads to loss of air content within the soil
Due to this heavy farm equipment including tractors can exert considerable weight onto the soil surface and consequently into the subsoil.
      This effect of equipment weight can penetrate down to 60cm when soil is moist.
      </P>
      <br></br>
      Some of the effects of the soil compaction are of the following
      <li>Soil pore spaces to become smaller</li>
      <li>Reduce the water infiltration rate into the soil</li>
      <li>Increase the potential for surface water ponding</li>
      <li>Soil waterlogging</li>
      <li>Soil erosion</li>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/soil-3.jpg" alt="soil"/>
        <WorkImage src="/images/works/soil-1.jpg" alt="soil" />
      </SimpleGrid>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Intial Solution to the Problem</Center>
      </Heading>

      <P>At first glance , the solution is to make an aerial droid or drone to carry out the agricultural processes
But the aerial devices like drones may result in the damage of soil and crops  due to the external pressure exerted by the propellers</P>
      <br></br>
      <Meta>Setup</Meta><span>DJI F450 frame, 2312E 800KV Motor, 420 Lite ESC, 9450 Propellers Gary, 10,000 mAh LiPo, ArduPilot Controller with NESO GPS, FlySky Radio Transmittor, NAZA Control Kit</span>
      <br></br><br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/drone1.jpg" alt="drone"/>
        <WorkImage src="/images/works/drone2.jpg" alt="drone" />
      </SimpleGrid>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Project CLARA</Center>
      </Heading>
<P>We decided to do Cable Driven Parallel Robot (CDPR) which can carry out different agriculture processes and can work in indoor and outdoor environments
So we made CLARA (Cable Lifted Automated Robot for Agriculture) is CDPR and her motion is dependent on 8 Motors from which she is suspended using strings</P>
      <br></br>
      <P>Most of the motion is controlled by the motors which do assist in the movement within the x-y-z plane and added extra stability. CDPR system can advantageous over the CNC system because the CDPR system can be scaled up or down using came equipment by reeling out the wire but in the CNC system, it would require longer or shorter drive trains. The system is programmed using Distance Formulae instead of using the Discrete-time integrator function on Matlab which made it easier to control multiple coordinates at the same time. Hence this CDPR system can be easily scaled from small farms to larger farm production using the same robotics system. </P>
      <br></br>

      <Meta>8-July-2018</Meta>
      <br></br>
      <P>Initally, we build some robot base using Lego Technic and Mindstorms kits and winded the nylon fishing line to the wheels and hooked it to the corners of the room.
        But it in intial setup, we had motors attached the Robot Base.
      </P><br></br>
      <Meta>Setup</Meta><span>LEGO Education Mindstorms EV3 Core Set, LEGO Education MINDSTORMS Education EV3 Expansion Set</span>
      <br></br><br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara1.jpeg" alt="clara"/>
        <WorkImage src="/images/works/clara2.jpeg" alt="clara" />
      </SimpleGrid>

      <br></br>

      <Meta>25-July-2018</Meta>
      <br></br>
      <P>Since, the previous setup has failed due to excess of weight load of motors winded up the fishing line so we moved into more simpler setup.We used a IKEA table and drilled few holes to attach the Lego EV3 Stock motors and made a small plastic case to move the robot around.</P>
      <br></br>
      <SimpleGrid columns={1} gap={1}>
        <WorkImage src="/images/works/clara3.jpeg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>8-Sept-2018 - 10-Sept-2018</Meta>
      <br></br>
      <P>Finally, our robotics lab reopened after the summer break, we finally decided to build our robot base using low-cost hardware such as plywood and mdf sheets.
        Later, hooked it up to some wood planks of 100 cm and drilled some holes for holes and manually controlled the motors.
      </P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara4.jpeg" alt="clara"/>
        <WorkImage src="/images/works/clara5.jpg" alt="clara" />
        <WorkImage src="/images/works/clara6.jpg" alt="clara" />
        <WorkImage src="/images/works/clara7.jpg" alt="clara" />
      </SimpleGrid>

      <br></br>
      <Meta>16-Sept-2018</Meta>
      <br></br>
      <P>After, manually controlling it and we finally drilled the motors to the corners of the poles and lined the fishing line and bought the robot to its origin (ie. center)
      </P>
      <br></br>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara8.jpg" alt="clara"/>
        <Player
      playsInline
      src="/images/works/clara-video2.mp4"
      />
      </SimpleGrid>

      <br></br>
      <Meta>18-Sept-2018</Meta>
      <br></br>
      <P>Now, instead of having motors to the corners of the poles which made debugging them super difficult. So we decided to build up control units on each sides</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara9.jpg" alt="clara"/>
        <Player
      playsInline
      src="/images/works/clara-video3.mp4"
      />
      </SimpleGrid>

      
      <br></br>
      <Meta>24-Sept-2018 - 28-Sept-2018</Meta>
      <br></br>
      <P>We figuring out the issue of friction between the hooks and nylon fishing line, we decided add some pulleys. So much better we felt after nights of coding this thing.</P>
      <br></br>
      <SimpleGrid columns={1} gap={1}>
      <Player
      playsInline
      src="/images/works/clara-video5.mp4"
      />
      </SimpleGrid>


      <br></br>
      <Meta>30-Sept-2018</Meta>
      <br></br>
      <P>Now, we started to assemble the 2m x 2m x 2m booth for which our robot can move around</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara11.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara12.jpg" alt="clara"/>
      </SimpleGrid>
      
      <br></br>
      <Meta>8-October-2018</Meta>
      <br></br>
      <P>Now, after months of the work and here is first version of Clara decked arduino/raspberry based sensors and PixyCam</P>
      <br></br>
      <Player
      playsInline
      src="/images/works/clara-video6.mp4"
      /><br></br>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/clara13.jpg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>25-October-2018</Meta>
      <br></br>
      <P>We decided to make more cleaner version of the robot base and decided drill the control unit to the top of the poles with updated worm gear design and anti-slip ring designs</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara17.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara18.jpg" alt="clara"/>
      </SimpleGrid>
      <br></br>
      <Player
      playsInline
      src="/images/works/clara-video7.mp4"
      />

      <br></br>
      <Meta>30-October-2018</Meta>
      <br></br>
      <P>Now we have to program the robot movement using more effiecent and effective approach and after testing out multiple equation such as discrete time integrator.After reading ever research paper
        in the internet on CDPR we decided to manually move the robot to every coordinate and graph the equation.
      </P><br></br>
      <P>The equation which we finally decide go for was the distance formulae in 3D space and cross-verified the eqution.</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara19.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara20.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara21.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara22.jpg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>Insight with Industry : 9-October-2018</Meta>
      <br></br>
      <P>We met with few leaders in the field of robotics vertical farms in the UAE : Pure Harvest MENA and gave us few insights of the field and how our robotics system can be used in their environment</P>
      <br></br>
      <WorkImage src="/images/works/clara25.jpg" alt="clara"/>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara23.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara24.jpg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>9-November-2018</Meta>
      <br></br>
      <P>Now, we made a few mechnism to drop cups into hydroponic pipes</P>
      <br></br>
      <Player
      playsInline
      src="/images/works/clara-video8.mp4"
      />

      <br></br>
      <Meta>12-November-2018</Meta>
      <br></br>
      <P>Here, is the movement of the robot using the distance formulae in the hydroponics setup</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <Player
      playsInline
      src="/images/works/clara-video9.mp4"
      />
      <Player
      playsInline
      src="/images/works/clara-video10.mp4"
      />
      </SimpleGrid>

      <br></br>
      <Meta>13-November-2018</Meta>
      <br></br>
      <P>We were getting ready for the World Robotics Olympiad at Thailand 2018 as Team UAE, so we were adding some led strips for the presentation purposes</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <Player
      playsInline
      src="/images/works/clara-video11.mp4"
      />
      <Player
      playsInline
      src="/images/works/clara-video12.mp4"
      />
      </SimpleGrid>

       <br></br>
      <Meta>13-November-2018</Meta>
      <br></br>
      <P>Few pictures of the final setup</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara27.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara33.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara28.jpg" alt="clara"/>
      </SimpleGrid>
      <br></br>
      <P>We also designed few posters for the WRO</P>
      <br></br>
      <WorkImage src="/images/works/clara29.jpg" alt="clara"/>
      <WorkImage src="/images/works/clara30.jpg" alt="clara"/>
      <WorkImage src="/images/works/clara31.jpg" alt="clara"/>

      <br></br>
      <Meta>14-November-2018</Meta>
      <br></br>
      <P>We started to pack everything up for the competition and get ready for the flight on same night</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara33.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara34.jpg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>15-November-2018 - 18-November-2018</Meta>
      <br></br>
      <P>Hello! Thailand and few pictures of WRO</P>
      <br></br>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/clara35.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara42.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara38.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara39.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara40.jpg" alt="clara"/>
        <WorkImage src="/images/works/clara41.jpg" alt="clara"/>
      </SimpleGrid>

      <br></br>
      <Meta>22-November-2018</Meta>
      <br></br>
      <P><b>We were ranked 14th Place out of 65 countries in the Senior-Open catetory and also we were only the project to feature aerial/cable driven robot in the farming sector</b></P>
      <br></br>
      <WorkImage src="/images/works/clara43.jpg" alt="clara"/>
  </Layout>
)

export default Work
