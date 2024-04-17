import * as z from "zod"

export const ArchiveModel = z.object({
  id: z.string(),
  part: z.string().nullish(),
  wtg: z.string().nullish(),
  site: z.string().nullish(),
  path: z.string().nullish(),
  status: z.string().nullish(),
  size: z.string().nullish(),
  uploaded: z.string().nullish(),
  upload_time: z.string().nullish(),
})
