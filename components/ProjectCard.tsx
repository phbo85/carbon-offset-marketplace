import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  AspectRatio,
  Tag,
  Wrap,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import { type Project } from '@/lib/projects/schema'
import { getSDG } from '@/lib/projects/getSDG'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardBody as={Flex} direction="column" gap={4}>
        <AspectRatio ratio={16 / 9} w="full">
          <NextImage
            src={project.image}
            fill
            style={{ objectFit: 'cover' }}
            alt={project.name}
          />
        </AspectRatio>
        <Heading as="h3" size="xl">
          {project.name}
        </Heading>
        <Flex justify="space-between" my={2}>
          <Tag colorScheme="green" size="lg">
            supplied by {project.supplierName}
          </Tag>
          <Tag colorScheme="teal" size="lg">
            {project.country}
          </Tag>
        </Flex>
        <Wrap>
          {project.sdgs.map((id) => (
            <Tag key={id}>{getSDG(id)}</Tag>
          ))}
        </Wrap>
        <Box mt="auto">
          <Text fontSize="xl" fontWeight="bold" textAlign="right">
            ${project.pricePerTon.toLocaleString()}
          </Text>
          <Text fontSize="xs" textAlign="right">
            per ton of CO2
          </Text>
        </Box>
      </CardBody>
      <CardFooter borderTop="1px solid">
        <InputGroup>
          <InputLeftAddon>t</InputLeftAddon>
          <NumberInput
            defaultValue={project.offeredVolumeInTons}
            max={project.offeredVolumeInTons}
            min={0}
            precision={0}
            w="100%"
          >
            <NumberInputField borderLeftRadius={0} />
          </NumberInput>
        </InputGroup>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
export default ProjectCard
