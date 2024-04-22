import { ipcMain } from "electron";

ipcMain.on("", async () => {
  const data = await prisma.uploadItem.findMany();

  return data;
});
