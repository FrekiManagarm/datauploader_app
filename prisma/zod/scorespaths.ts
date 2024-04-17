import * as z from "zod"

export const ScoresPathsModel = z.object({
  id: z.string(),
  wtg: z.string().nullish(),
  site: z.string().nullish(),
  path: z.string().nullish(),
})
