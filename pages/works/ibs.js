import {
  Badge,
  List,
  Link,
  Button,
  Icon,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoTwitter,
} from 'react-icons/io5'
import '../../node_modules/video-react/dist/video-react.css' // import css
;<link rel="stylesheet" href="/css/video-react.css" />

import React from 'react'
import { Player } from 'video-react'

const Work = () => (
  <Layout title="Ice Bear Soceity">
    <Title>
      Ice Bear Society NFT Project <Badge>December 2021 - August 2022</Badge>
    </Title>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Project Ice Bear Society NFT Collection</Center>
      <br></br>
      <Center>
        <List>
          <Link href="https://github.com/icebearsociety" target="_blank">
            <Button
              variant="ghost"
              //colorScheme="teal"
              align="center"
              leftIcon={<Icon as={IoLogoGithub} />}
            ></Button>
          </Link>

          <Link href="https://instagram.com/icebearsociety" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoInstagram} />}
            ></Button>
          </Link>

          <Link href="https://www.icebearsociety.com/" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoGoogle} />}
            ></Button>
          </Link>

          <Link href="https://twitter.com/icebearsociety" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<Icon as={IoLogoTwitter} />}
            ></Button>
          </Link>
        </List>
      </Center>
    </Heading>
    <P>
      ❄️ The Ice Bear Society is a collection of 3333 unique Ice Bears shilling
      on the Fantom Blockchain that strives to be the highest value NFT project.{' '}
      <br></br>
      <br></br>🐻‍❄️ An NFT project that aims to conserve polar bears by
      donating 33% of the total sales to improve their den conditions and
      protect them from extinction.
      <br></br>
      <br></br> ❤️‍🔥Built on the Fantom Network, they have also established a
      bridge to ensure a smooth transition from other blockchain platforms such
      as Polygon, Ethereum, etc. <br></br>
      <br></br> 🇮🇳 With a doxxed team and experience team from India which aims
      to become one of the biggest mission-driven NFT projects from India.{' '}
      <br></br>
      <br></br>🤝 To further broaden the scope of the Ice Bear Society, Ice Bear
      Society has collaborated with renowned Telugu film director Tharun
      Bhascker, Indian stylist Neeraja Kona, numerologist Sheelaa M Bajaj, and
      model Liudmyla Tkachenko. <br></br>
      <br></br>🦄 Additionally, Partnered with Hoodoi.com, Umbria Network Defi,
      and NFT Garage and is also listed on NFTKey - Marketplace, TOFUNFT, and
      Paintswap Marketplace (The biggest marketplace for Fantom Based NFT
      Projects)
    </P>
    <br></br>
    <Player playsInline src="/images/works/ibs/1.mp4" />
    <br></br>
    <Heading as="h4" fontSize={16} my={6}>
      <Center>Media Coverage</Center>
    </Heading>
    <br></br>
    <Meta>NFT Key</Meta>
    <span>
      <a href="https://nftkey.app/collections/icebearsociety/">
        NFT Key Marketplace{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>Hodooi</Meta>
    <span>
      <a href="https://blog.hodooi.com/ice-bear-society-announced-as-exclusive-nft-project-on-hodooi-com/">
        Ice Bear Society announced as exclusive NFT project on HoDooi.com{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>nftcalendar</Meta>
    <span>
      <a href="https://nftcalendar.io/event/ice-bear-society-the-mission-to-save-polar-bears-in-the-arctic/">
        Ice bear society: the mission to save polar bears in the arctic{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>animationxpress</Meta>
    <span>
      <a href="https://www.animationxpress.com/animation/mahindra-university-students-nft-project-focuses-on-preserving-polar-bears/</span>/">
        Mahindra University students’ NFT Project focuses on preserving polar
        bears{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
    <br></br>
    <Meta>mymobileindia</Meta>
    <span>
      <a href="https://www.mymobileindia.com/ice-bear-society-an-nft-project-for-a-cause/">
        Ice Bear Society: An NFT Project for a Cause{' '}
      </a>
      <ExternalLinkIcon></ExternalLinkIcon>
    </span>
  </Layout>
)

export default Work
