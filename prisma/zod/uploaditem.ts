import * as z from "zod"

export const UploadItemModel = z.object({
  id: z.string(),
  path: z.string().nullish(),
  size: z.string().nullish(),
  status: z.string().nullish(),
  uploaded: z.string().nullish(),
  upload_time: z.string().nullish(),
})
