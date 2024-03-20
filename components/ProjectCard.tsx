import { getSDG } from '@/lib/projects/getSDG'
import { type Project } from '@/lib/projects/schema'
import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Tag,
  Text,
  Wrap,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import AddToCart from './AddToCart'

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    id,
    name,
    country,
    image,
    supplierName,
    pricePerTon,
    offeredVolumeInTons,
    sdgs,
  } = project

  return (
    <Card>
      <CardBody as={Flex} direction="column" gap={4}>
        <AspectRatio ratio={16 / 9} w="full">
          <NextImage
            src={image}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: var(--chakra-breakpoints-sm)) 100vw, (max-width: var(--chakra-breakpoints-lg))) 33vw, 15vw"
            alt={name}
          />
        </AspectRatio>
        <Heading as="h3" size="xl">
          {name}
        </Heading>
        <Flex justify="space-between" my={2}>
          <Tag bg="custom.green" size="lg">
            supplied by {supplierName}
          </Tag>
          <Tag bg="custom.bg" size="lg">
            {country}
          </Tag>
        </Flex>
        <Wrap>
          {sdgs.map((id) => (
            <Tag key={id}>{getSDG(id)}</Tag>
          ))}
        </Wrap>
        <Box mt="auto">
          <Text fontSize="xl" fontWeight="bold" textAlign="right">
            ${pricePerTon.toLocaleString('en-US')}
          </Text>
          <Text fontSize="xs" textAlign="right">
            per ton of CO2
          </Text>
        </Box>
      </CardBody>
      <CardFooter borderTop="1px solid">
        <AddToCart id={id} max={offeredVolumeInTons} price={pricePerTon} />
      </CardFooter>
    </Card>
  )
}
export default ProjectCard
