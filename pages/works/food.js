import { Badge, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title} from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'

const Work = () => (
  <Layout title="recipegenerator">
    <Title>
      Generating Food Recipes From Given Ingredient{' '}
      <Badge>August 2021 - August 2021</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Generating Food Recipes From Given Ingredient</Center>
      <br></br>
      <Center>
        <a href="https://github.com/rahularepaka/Recipe-Generator">
          Find the Github Repo here&nbsp;
        </a>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Center>
    </Heading>
    <P>
      The following python program will generate recipes and Diet-labels from
      the given ingredients and will create text file with the details inside
      the file such Recipes and Diet-label along with Heading of the Ingredient
      and Date and Time of the file created.
    </P>
    <br></br>
    <P>
      To simplify the program,the code utilises an API to call the api and
      recieve all the details of the food reciepes.
    </P>
    <Heading as="h4" fontSize={15} my={6}>
      <Center>
        This code was part of the Enigma CS MU CLUB - Mini Python Project Series{' '}
      </Center>
    </Heading>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>Requirements</Center>
    </Heading>
    <P>
      <li>Python 3.7</li>
      <li>Urllib in-built library</li>
      <li>Json in-built library</li>
      <li>Date and Time in-built library</li>
    </P>
    <Heading as="h4" fontSize={14} my={6}>
      <Center>How to Run</Center>
    </Heading>
    <li>clone the repo</li>
    <li>Open the file and go to 25th line to replace the file location</li>
    <li>Run the main .py file</li>
    <li>Enter the Ingredient or food related dish</li>
    <li>Once done, the text file with list of recipes will be present in the folder</li>
  </Layout>
)

export default Work
