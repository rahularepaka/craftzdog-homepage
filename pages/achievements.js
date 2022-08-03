import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { GridItem } from '../components/grid-item'

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

import wro from '../public/images/contents/wro.jpg'
import fll from '../public/images/contents/fll2.jpg'
import bab from '../public/images/contents/bab.jpg'
import mu from '../public/images/contents/mu.jpg'
import ftc from '../public/images/contents/ftc2.jpg'
import emc2 from '../public/images/contents/em.jpg'
import uwod from '../public/images/contents/uowd.jpg'
import wro2 from '../public/images/contents/wro2.jpg'

import win from '../public/images/contents/win.jpg'
import oow from '../public/images/contents/oow.jpg'
// import nro from '../public/images/contents/nro.jpg'
import robocon from '../public/images/contents/robocon.webp'

const Works = () => (
  <Layout title="Works">
    <br />
    <Container></Container>
    <Heading as="h3" variant="section-title">
      Here, some of things which I achieved!
    </Heading>
    <br />
    <Heading as="h2" variant="section-title">
      2022
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="Represented University at DD-Robocon 2022 Nationals"
        thumbnail={robocon}
      />

      <Section />
    </SimpleGrid>

    <Heading as="h2" variant="section-title">
      2021
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="Judge at the World Robotics Olympiad 2021 - Nationals UAE"
        thumbnail={wro}
      />

      <GridItem
        title="Mentor and Judge at the FIRST Lego League – National Level 2021"
        thumbnail={fll}
      />

      <Section />
    </SimpleGrid>

    <Heading as="h2" variant="section-title">
      2020
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="Finalist for Global Babson challenge (Top 10 Teams)"
        thumbnail={bab}
      />

      <GridItem
        title="First Place at Mahindra University Research Symposium"
        thumbnail={mu}
      />

      <GridItem
        title="Mentor and Judge at the FIRST Lego League – National Level 2020"
        thumbnail={fll}
      />

      <GridItem
        title="Principal Award of Excellence for Best All Rounder - AISCEE 2020"
        thumbnail={oow}
      />

      <Section />
    </SimpleGrid>

    <Heading as="h2" variant="section-title">
      2019
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem title="Think Award at FIRST Tech Challenge" thumbnail={ftc} />

      <GridItem title="Media Coverage for E-MC2 Project" thumbnail={emc2} />

      <Section />
    </SimpleGrid>

    <Heading as="h2" variant="section-title">
      2018
    </Heading>

    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="Ranked 14th in the World Robotics Olympiad at Thailand"
        thumbnail={wro2}
      />

      <GridItem
        title="1st Place in Open Category Robotics Demonstration at University of Wollongong, Dubai"
        thumbnail={uwod}
      />

      <GridItem
        title="1st Place in Technobizz Business Challenge"
        thumbnail={win}
      />

      <GridItem
        title="1st Place in National Robotics Olympiad 2018 and qualifed to represent UAE"
        thumbnail={wro2}
      />

      <Section />
    </SimpleGrid>
  </Layout>
)

export default Works
