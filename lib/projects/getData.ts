import { projects } from './data'
import { Projects, projectsSchema } from './schema'

export const getProjects = (): Projects => {
  return projectsSchema.parse(projects)
}
