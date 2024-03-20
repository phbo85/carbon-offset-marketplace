import { z } from 'zod'
import { mapKeys, camel } from 'radash'

export const projectSchema = z
  .record(z.any())
  .transform((x) => mapKeys(x, camel))
  .pipe(
    z.object({
      id: z.number(),
      name: z.string(),
      country: z.string(),
      image: z.string(),
      pricePerTon: z.number(),
      offeredVolumeInTons: z.number(),
      distributionWeight: z.number(),
      supplierName: z.string(),
      earliestDelivery: z.string(),
      sdgs: z.array(z.number()),
      description: z.string(),
    })
  )

export const projectsSchema = z.array(projectSchema)

export type Project = z.infer<typeof projectSchema>
export type Projects = z.infer<typeof projectsSchema>
