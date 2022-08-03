//import NextLink from 'next/link'
<<<<<<< HEAD
import { Heading, Box } from '@chakra-ui/react'
=======
import {
  Heading,
  Box,
} from '@chakra-ui/react'


>>>>>>> a9fe259b0c996547420636885516341da02ef3e2

//import { ChevronRightIcon } from '@chakra-ui/icons'
//import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'

//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

<<<<<<< HEAD
const Home = () => (
  <Layout>
    <br />
    <br />

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <br />
        <Heading as="h2" variant="page-title">
          Mahindra University
        </Heading>
        <p>Bachelor of Technology in Computer Science and Engineering</p>
        <br></br>
        <p>
          I am currently in <b>3-1 : Fall 2022 Term</b>
        </p>
      </Box>
    </Box>

    <br></br>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        2-2 : Spring 2021
      </Heading>
      <li>Mathematics IV (Numerical Methods) (ES 211)</li>
      <li>Digital Logic Design and Computer Architecture (CS 202)</li>
      <li>Artificial and Computational Intelligence</li>
      <li>Machine Learning with Python</li>
      <li>Theory of Computation (CS 205)</li>
      <li>Design Thinking (SE 203)</li>
      <li>French Language & Culture IV (FL 204)</li>
      <li>Programming Workshop</li>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        2-1 : Fall 2021
      </Heading>
      <li>Mathematics III (MA 2103)</li>
      <li>Physics II (PH 2101)</li>
      <li>Data Structures (CS 2104)</li>
      <li>Signals and System (EE 2102)</li>
      <li>Optimization Techniques for Artificial Intelligence (CS 1201)</li>
      <li>French language & Culture -III (HS 2103)</li>
      <li>Discrete Mathematical Structures (CS 201)</li>
      <li>Programming Workshop (CS 2106)</li>
      <li>Lean Startup</li>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        1-2 : Spring 2020
      </Heading>
      <li>Mathematics II (MA 1202)</li>
      <li>Physics I (PH 1202)</li>
      <li>Chemistry II (CH 1202)</li>
      <li>Electronics (EE 1202)</li>
      <li>Introduction to Computer Science (CS 1201)</li>
      <li>Workshop Practice (ME 1202)</li>
      <li>Introduction to Enterprise & Economy (HS 1204)</li>
      <li>Professional Ethics (HS 1205)</li>
      <li>French language & Culture -II (HS 1206)</li>
      <li>Engineering Drawing (ME 1204)</li>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        1-1 : Fall 2020
      </Heading>
      <li>Mathematics I (MA 1101)</li>
      <li>Chemistry I (CH 1101)</li>
      <li>Electrical Engineering (EE 1101)</li>
      <li>Earth & Environmental Sciences (CE 1101)</li>
      <li>Thermodynamics (ME 1101)</li>
      <li>English & Humanities I (HS 1101)</li>
      <li>French Language & Culture I (HS 1103)</li>
    </Section>
=======


const Home = () => (
  <Layout>
    <br/>
    <br/>
  
    
    <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <br/>
          <Heading as="h2" variant="page-title">
            Mahindra University
          </Heading>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
          <br></br>
          <p>I am currently in <b>2-2 : Spring 2021 Term</b></p>
        </Box>
      </Box>

      <br></br>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          2-2 : Spring 2021
        </Heading>
        <li>Mathematics IV (Numerical Methods) (ES 211)</li>
        <li>Digital Logic Design and Computer Architecture (CS 202)</li>
        <li>Artificial and Computational Intelligence</li>
        <li>Machine Learning with Python</li>
        <li>Theory of Computation (CS 205)</li>
        <li>Design Thinking (SE 203)</li>
        <li>French Language & Culture IV (FL 204)</li>
        <li>Programming Workshop</li>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          2-1 : Fall 2021
        </Heading>
        <li>Mathematics III (MA 2103)</li>
        <li>Physics II (PH 2101)</li>
        <li>Data Structures (CS 2104)</li>
        <li>Signals and System (EE 2102)</li>
        <li>Optimization Techniques for Artificial Intelligence (CS 1201)</li>
        <li>French language & Culture -III (HS 2103)</li>
        <li>Discrete Mathematical Structures (CS 201)</li>
        <li>Programming Workshop (CS 2106)</li>
        <li>Lean Startup</li>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          1-2 : Spring 2020
        </Heading>
        <li>Mathematics II (MA 1202)</li>
        <li>Physics I (PH 1202)</li>
        <li>Chemistry II  (CH 1202)</li>
        <li>Electronics (EE 1202)</li>
        <li>Introduction to Computer Science (CS 1201)</li>
        <li>Workshop Practice (ME 1202)</li>
        <li>Introduction to Enterprise & Economy (HS  1204)</li>
        <li>Professional Ethics (HS 1205)</li>
        <li>French language & Culture -II (HS 1206)</li>
        <li>Engineering Drawing (ME 1204)</li>
      </Section>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          1-1 : Fall 2020
        </Heading>
        <li>Mathematics I (MA 1101)</li>
        <li>Chemistry I (CH 1101)</li>
        <li>Electrical Engineering (EE 1101)</li>
        <li>Earth & Environmental Sciences (CE 1101)</li>
        <li>Thermodynamics (ME 1101)</li>
        <li>English & Humanities I (HS 1101)</li>
        <li>French Language & Culture I (HS 1103)</li>
      </Section>

      
      
>>>>>>> a9fe259b0c996547420636885516341da02ef3e2
  </Layout>
)

export default Home
