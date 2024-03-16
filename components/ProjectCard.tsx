import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Box,
  Heading,
  AspectRatio,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import { type Project } from '@/lib/projects/schema'
import { getSDG } from '@/lib/projects/getSDG'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={16 / 9}>
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
        <Wrap>
          {project.sdgs.map((id) => (
            <Tag key={id}>{getSDG(id)}</Tag>
          ))}
        </Wrap>
        <Box>{project.description}</Box>
      </CardBody>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
export default ProjectCard
