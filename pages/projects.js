<<<<<<< HEAD
import { Heading, SimpleGrid } from '@chakra-ui/react'
=======
import { Heading, Box, SimpleGrid,useColorModeValue } from '@chakra-ui/react'
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

/*
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'
*/
import Yolo from '../public/images/contents/yolo.jpeg'
import car from '../public/images/contents/car.png'
import laser from '../public/images/contents/laser.jpg'
import food from '../public/images/contents/food.jpg'
import mask from '../public/images/contents/mask.png'
import alcohol from '../public/images/contents/alcohol.jpg'
import em from '../public/images/contents/em.jpg'
import dolly from '../public/images/contents/dolly.jpg'
import clara from '../public/images/contents/clara.jpg'
import agri from '../public/images/contents/agri.jpg'
import laser2 from '../public/images/contents/laser2.jpg'
<<<<<<< HEAD
import robocon1 from '../public/images/contents/robcon1.jpg'
import pollution1 from '../public/images/contents/pollution.jpg'
import landet from '../public/images/contents/landet.png'
import atv from '../public/images/contents/atv.webp'
import ibs from '../public/images/contents/ibs.png'
=======
import robocon1 from '../public/images/contents/robocon-1.jpeg'
import pollution1 from '../public/images/contents/pollution.jpg'



>>>>>>> a9fe259b0c996547420636885516341da02ef3e2


const Posts = () => (
  <Layout title="Projects">
    <br />

<<<<<<< HEAD
    {/* <Box
=======
    <Box
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Currently, Researching on Vision based laser targeting system for
      continous weeding in Moblie Robots
<<<<<<< HEAD
    </Box> */}
=======
    </Box>
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2

    <Heading as="h3" variant="section-title">
      Here, Some of the Projects which I worked on
    </Heading>
    <br />
    <Heading as="h3" variant="section-title">
      2022
    </Heading>
    <br />
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
<<<<<<< HEAD
      <WorkGridItem title="Autonomous Electric ATV" thumbnail={atv} id="atv" href="" />
      <WorkGridItem
        id="pollutex"
        title="Pollution Checker"
        thumbnail={pollution1}
        href=""
      />
=======
      <WorkGridItem id="pollutex" title="Pollution Checker" thumbnail={pollution1} href="" />
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      <WorkGridItem
        title="Robocon 2022 : Lagori"
        thumbnail={robocon1}
        href=""
      />
<<<<<<< HEAD
      <WorkGridItem
        title="Lane Detection"
        thumbnail={landet}
        id="lane"
        href="https://github.com/rahularepaka/lane-detection"
      />

      <WorkGridItem
        title="Ice Bear Society - NFT Project"
        thumbnail={ibs}
        id="ibs"
        href=""
      />
=======
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
    </SimpleGrid>

    <Heading as="h3" variant="section-title">
      2021
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <WorkGridItem
        title="Vision based laser targeting system for continous weeding in Moblie Robots"
        thumbnail={laser2}
<<<<<<< HEAD
        id="farmingrev"
=======
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      />

      <WorkGridItem
        title="Object Detection using YOLOv4 and Streamlit WebApp"
        thumbnail={Yolo}
<<<<<<< HEAD
        id="obj"
=======
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
        href="https://github.com/rahularepaka/ObjectDetectionYolov4Web"
      />
      <WorkGridItem
        title="DAA Self Driving Car Dashboard"
        thumbnail={car}
<<<<<<< HEAD
        id="daa"
=======
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
        href="https://github.com/crypto-code/Car-Dashboard-Studio"
      />

      <WorkGridItem
        title="Laser Weeding for FarmBot"
        thumbnail={laser}
<<<<<<< HEAD
        id="laser"
=======
        href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      />
      <SimpleGrid></SimpleGrid>
      <br />
      <Heading as="h3" variant="section-title">
        2020
      </Heading>
      <br />
      <WorkGridItem
        title="Recipie Generator using API"
<<<<<<< HEAD
        id="food"
        thumbnail={food}
      />

      <WorkGridItem
        title="Mask Detection with Alarm"
        id="mask"
        thumbnail={mask}
      />
      <WorkGridItem
        title="Alcohol Detection with Engine Lock"
        id="alco"
        thumbnail={alcohol}
=======
        thumbnail={food}
        href="https://github.com/rahularepaka/Recipe-Generator"
      />

      <WorkGridItem
        title="Mask and Temperature Detection"
        thumbnail={mask}
        href="https://github.com/rahularepaka/maskdetection"
      />
      <WorkGridItem
        title="Alcohol Detection with Engine Lock"
        thumbnail={alcohol}
        href="https://github.com/rahularepaka/arduino_Alcoholdetection"
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      />

      <SimpleGrid></SimpleGrid>
      <Heading as="h3" variant="section-title">
        2019
      </Heading>
      <br />

<<<<<<< HEAD
      <WorkGridItem id="emc2" title="Waste Card Collector" thumbnail={em} />
      <WorkGridItem id="dolly" title="Dolly" thumbnail={dolly} href="" />
=======
      <WorkGridItem
        title="Waste Card Collector"
        thumbnail={em}
        href="https://www.khaleejtimes.com/article/dubai-students-invent-machine-to-get-rid-of-massage-card-trash"
      />
      <WorkGridItem title="Dolly" thumbnail={dolly} href="" />
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
      <br />
      <SimpleGrid></SimpleGrid>
      <Heading as="h3" variant="section-title">
        2018
      </Heading>
      <br />

      <WorkGridItem id="clara" title="Clara" thumbnail={clara} href="" />
<<<<<<< HEAD
      <WorkGridItem id="agribot" title="AgriBot" thumbnail={agri} href="" />
=======
      <WorkGridItem title="AgriBot - Companion" thumbnail={agri} href="" />
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
    </SimpleGrid>
  </Layout>
)

<<<<<<< HEAD
export default Posts
=======
export default Posts
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
