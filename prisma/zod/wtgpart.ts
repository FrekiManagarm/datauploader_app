import * as z from "zod"

export const WTGPartModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  wtg: z.string().nullish(),
  site: z.string().nullish(),
  status: z.string().nullish(),
})
