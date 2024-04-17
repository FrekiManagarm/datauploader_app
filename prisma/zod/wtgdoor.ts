import * as z from "zod"

export const WTGDoorModel = z.object({
  id: z.string(),
  wtg: z.string().nullish(),
  site: z.string().nullish(),
  door_path: z.string().nullish(),
  status: z.string().nullish(),
})
