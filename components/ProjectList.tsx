import { SimpleGrid } from '@chakra-ui/react'
import { getProjects } from '@/lib/projects/getData'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  const projects = getProjects()

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </SimpleGrid>
  )
}

export default ProjectsList
