import { Container, Heading ,Box, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
/*
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
*/
const Works = () => (
  <Layout title="Works">
    <br/>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Recently, I was a Judge at the World Robotics Olympiad 2021 Nationals UAE : POWERBOTS - THE FUTURE OF ENERGY
      </Box>
    </Container>
    <Container>
      <Heading as="h3" variant="section-title">
          Here, some of things which I achieved!
        </Heading>

        <Section>
        <li><b>Judge</b> at the World Robotics Olympiad 2021 - Nationals UAE</li><br/>
        <li><b>Finalist</b> for Global Babson Collaborative challenge – Bachelor’s level (Top 10 Teams)</li><br/>
        <li><b>First Place</b> at Mahindra University Research Symposium 2020.</li><br/>
        <li>Received <b>Think Award</b> at FIRST Tech Challenge at American University Sharjah 2019.</li><br/>
        <li><b>Represented UAE</b> in the Finals of World Robotics Olympiad 2018 at Thailand in Nov-2018 and <b>ranked 14th</b></li><br/>
        <li><b>1st Place</b> in Open Category Seniors at National Robotics Olympiad 2018 (UAE Chapter) under the Food-Matters.</li><br/>
        <li><b>1st Place</b> in Technobizz Business Challenge at Winchester School, Jebel Ali, Dubai.</li><br/>
        <li><b>1st Place</b> in Open Category Robotics Demonstration 2018 at University of Wollongong, Dubai.</li><br/>
        <li><b>Mentor and Judge</b> at the FIRST Lego League – National Level 2020 and 2021.</li><br/>
        </Section>


    </Container>
  </Layout>
)

export default Works
