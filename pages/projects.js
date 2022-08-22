import { Heading, SimpleGrid } from '@chakra-ui/react'
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
import robocon1 from '../public/images/contents/robcon1.jpg'
import pollution1 from '../public/images/contents/pollution.jpg'
import atv from '../public/images/contents/atv.webp'
import lane from '../public/images/contents/landet.png'





const Posts = () => (
  <Layout title="Projects">
    <br />

    {/* <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Currently, Researching on Vision based laser targeting system for
      continous weeding in Moblie Robots
    </Box> */}

    <Heading as="h3" variant="section-title">
      Projects which I worked on
    </Heading>
    <br />
    <Heading as="h3" variant="section-title">
      2022
    </Heading>
    <br />
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <WorkGridItem
        id="atv"
        title="Autonomous Electric ATV "
        thumbnail={atv}
        href=""
      />
      <WorkGridItem
        id="pollutex"
        title="Pollution Checker"
        thumbnail={pollution1}
        href=""
      />
      <WorkGridItem
        id="lane"
        title="Lane Detection"
        thumbnail={lane}
        href=""
      />
      <WorkGridItem
        title="Robocon 2022 : Lagori"
        thumbnail={robocon1}
        href=""
      />
    </SimpleGrid>

    <Heading as="h3" variant="section-title">
      2021
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <WorkGridItem
        title="Vision based laser targeting system for continous weeding in Moblie Robots"
        thumbnail={laser2}
        id="farmingrev"
      />

      <WorkGridItem
        title="Object Detection using YOLOv4 and Streamlit WebApp"
        thumbnail={Yolo}
        id="obj"
        href="https://github.com/rahularepaka/ObjectDetectionYolov4Web"
      />
      <WorkGridItem
        title="DAA Self Driving Car Dashboard"
        thumbnail={car}
        id="daa"
        href="https://github.com/crypto-code/Car-Dashboard-Studio"
      />

      <WorkGridItem
        title="Laser Weeding for FarmBot"
        thumbnail={laser}
        id="laser"
        href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
      />
      <SimpleGrid></SimpleGrid>
      <br />
      <Heading as="h3" variant="section-title">
        2020
      </Heading>
      <br />
      <WorkGridItem
        title="Recipie Generator using API"
        thumbnail={food}
        id="food"
        href="https://github.com/rahularepaka/Recipe-Generator"
      />

      <WorkGridItem
        title="Mask Detection"
        thumbnail={mask}
        id="mask"
        href="https://github.com/rahularepaka/maskdetection"
      />
      <WorkGridItem
        title="Alcohol Detection with Engine Lock"
        thumbnail={alcohol}
        id="alco"
        href="https://github.com/rahularepaka/arduino_Alcoholdetection"
      />

      <SimpleGrid></SimpleGrid>
      <Heading as="h3" variant="section-title">
        2019
      </Heading>
      <br />

      <WorkGridItem
        title="Waste Card Collector"
        thumbnail={em}
        id="emc2"
        href="https://www.khaleejtimes.com/article/dubai-students-invent-machine-to-get-rid-of-massage-card-trash"
      />
      <WorkGridItem title="Dolly" id="dolly" thumbnail={dolly} href="" />
      <br />
      <SimpleGrid></SimpleGrid>
      <Heading as="h3" variant="section-title">
        2018
      </Heading>
      <br />

      <WorkGridItem id="clara" title="Clara" thumbnail={clara} href="" />
      <WorkGridItem title="AgriBot - Companion" id="agribot" thumbnail={agri} href="" />
    </SimpleGrid>
  </Layout>
)

export default Posts
