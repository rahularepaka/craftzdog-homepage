import { Badge, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'
// import { Player } from 'video-react'

const Work = () => (
  <Layout title="pollutex">
    <Title>
      Pollutex <Badge>last Updated : 20-May-22</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Pollutex 🚬</Center>
    </Heading>
    <P>
      By utilizing machine learning and image processing, Pollutex enables you
      to check the pollution levels of your surroundings without having to
      purchase expensive hardware.
      <br></br>
    </P>
    <br></br>
    {/* <Meta>Report</Meta>
    <span>
      <a href="https://github.com/rahularepaka/Project-Clara/blob/main/Team%20Emergence%20Report%20Clara.pdf">
        Click here to read the report{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>Sponsorship</Meta>
    <span>
      <a href="https://github.com/rahularepaka/Project-Clara/blob/main/Team%20Emergence%20-%20Sponsorship%20Proposal.pdf">
        Click here to read the Sponsorship Proposal{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span> */}
    {/* <br></br> */}
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Problem : Air Pollution</Center>
    </Heading>
    <P>
      Air pollution was responsible for 16.7 lakh deaths in India in 2019, or
      17.8% of all deaths in the country that year. This is the largest number
      of air-pollution-related deaths of any country, according to a recent
      report on pollution and health published in The Lancet Planetary Health.
    </P>
    <br></br>
    Dust & Construction contribute about 59% to the air pollution in India,
    which is followed by Waste Burning. Dust & Construction activities are
    mostly in the urban areas while Waste Burning is in the rural areas
    (agriculture).
    <br></br>
    <br></br>
    <SimpleGrid columns={2} gap={2}>
      <WorkImage
        src="/images/works/pol3.jpg"
        width="200px"
        height="300px"
        alt="pollution"
      />
      <WorkImage
        src="/images/works/pol1.jpg"
        width="200px"
        height="300px"
        alt="pollution"
      />
    </SimpleGrid>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Where did begin</Center>
    </Heading>
    <Heading as="h8" fontSize={16} my={6}>
      <Center>Intial Solution to the Problem</Center>
    </Heading>
    <Meta>How to measure Air Quality</Meta>
    <br></br>
    <br></br>
    <P>
      A measure of air quality is how clean or polluted the air is. We need to
      monitor the air quality because polluted air can harm our health and the
      environment.
      <br></br>
      <br></br>
      AQI measures air quality. The AQI works like a thermometer that runs from
      0 to 500 degrees. However, instead of showing changes in the temperature,
      the AQI is a way of showing changes in the amount of pollution in the air.
    </P>
    <br></br>
    <WorkImage src="/images/works/air-quality3.png" alt="drone" />
    <br></br>
    <Meta>AQI tracks five major air pollutants</Meta>
    <br></br>
    <li>Ground level ozone</li>
    <li>Carbon monoxide</li>
    <li>Sulfur dioxide</li>
    <li>Nitrogen dioxide</li>
    <li>Airborne particles, or aerosols</li>
    <br></br>
    <br></br>
    <Meta>Measuring Instruments</Meta>
    <br></br>
    <br></br>
    <P>
      PM2.5 or AQI mointors range from $400 to $10,000+ which is quite expensive
      to purchase for measuring air quality index.
    </P>
    <br></br>
    <SimpleGrid columns={3} gap={2}>
      <WorkImage
        src="/images/works/aqi1.png"
        width="200px"
        height="100px"
        alt="drone"
      />
      <WorkImage
        src="/images/works/aqi2.png"
        width="200px"
        height="100px"
        alt="drone"
      />
      <WorkImage
        src="/images/works/aqi3.png"
        width="200px"
        height="100px"
        alt="drone"
      />
    </SimpleGrid>
    <WorkImage src="/images/works/aqi4.png" alt="drone" />
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Solution : Project Pollutex</Center>
    </Heading>
    <P>
      With the power of image processing and machine learning, we have developed
      an app that detects the images and tells the status of the pollution
      <b> Severe</b>, <b> Moderate</b>, <b> Low</b>, and <b> No </b>
      pollution.
    </P>
    <br></br>
    <WorkImage src="/images/works/aqi6.png" alt="drone" />
    <br></br>
    <Meta>Technical Aspect : How it works</Meta>
    <br></br>
    <br></br>
    <P>
      Takes in an image, checks for the presence of sky by elimating the
      distractions in the image and apply computation on it from the previous
      datasets and provides the revelant output.
    </P>
    <br></br>
    <WorkImage src="/images/works/aqi7.svg" alt="drone" />
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Where we are today</Center>
    </Heading>
    <P>
      We were able to develop a tiny machine learning model which detects
      pollution and provides the following outputs.
    </P>
    <br></br>
    <SimpleGrid columns={3} gap={2}>
      <WorkImage
        src="/images/works/s1.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />
      <WorkImage
        src="/images/works/m1.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />

      <WorkImage
        src="/images/works/no1.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />

      <WorkImage
        src="/images/works/no2.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />

      <WorkImage
        src="/images/works/no3.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />

      <WorkImage
        src="/images/works/no4.jpeg"
        width="200px"
        height="100px"
        alt="drone"
      />
    </SimpleGrid>
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Why do we use it?</Center>
    </Heading>
    <P>
      Our app now allows anyone with access to a smartphone and a camera to take
      a picture of the sky and we will compute whether or not it is safe for you
      to breathe.
    </P>
    <br></br>
    <WorkImage src="/images/works/aqi10.jpg" alt="drone" />
    <br></br>
    <Heading as="h9" fontSize={12} my={6}>
      <Center>
        {' '}
        Rahul Arepaka | rahul20ucse156@mahindrauniversity.ac.in | +91-8919662296
      </Center>
      <br></br>
      <Center>
        {' '}
        Lohit G | lohit20uari089@mahindrauniversity.ac.in | +91-7093927667
      </Center>
    </Heading>
    <P></P>
  </Layout>
)

export default Work
