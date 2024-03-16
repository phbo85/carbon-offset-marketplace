import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@chakra-ui/react'
import { type Project } from '@/lib/projects/schema'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>{project.name}</CardHeader>
      <CardBody>{project.description}</CardBody>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
export default ProjectCard
