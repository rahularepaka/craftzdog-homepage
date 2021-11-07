import { Container, Heading, Box, SimpleGrid,useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
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


const Posts = () => (
  <Layout title="Projects">
    <br/>

    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Currently, Researching on Vision based laser targeting system for continous weeding in Moblie Robots
      </Box> 
    </Container>
    <Container>
      

      <Heading as="h3" variant="section-title">
          Here, Some of the Projects which I worked on
        </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Object Detection using YOLOv4 and Streamlit WebApp"
            thumbnail={Yolo}
            href="https://github.com/rahularepaka/ObjectDetectionYolov4Web"
          />
          <GridItem
            title="DAA Self Driving Car Dashboard"
            thumbnail={car}
            href="https://github.com/crypto-code/Car-Dashboard-Studio"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Laser Weeding for FarmBot"
            thumbnail={laser}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="Recipie Generator using API"
            thumbnail={food}
            href="https://github.com/rahularepaka/Recipe-Generator"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Mask and Temperature Detection"
            thumbnail={mask}
            href="https://github.com/rahularepaka/maskdetection"
          />
          <GridItem
            title="Alcohol Detection with Engine Lock"
            thumbnail={alcohol}
            href="https://github.com/rahularepaka/arduino_Alcoholdetection"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Waste Card Collector"
            thumbnail={em}
            href="https://www.khaleejtimes.com/article/dubai-students-invent-machine-to-get-rid-of-massage-card-trash"
          />
          <GridItem
            title="Dolly"
            thumbnail={dolly}
            href=""
          />
        </SimpleGrid>
      </Section>


      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Clara"
            thumbnail={clara}
            href="https://github.com/rahularepaka/Project-Clara"
          />
          <GridItem
            title="AgriBot - Companion"
            thumbnail={agri}
            href=""
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
