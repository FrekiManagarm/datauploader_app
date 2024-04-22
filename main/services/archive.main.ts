import { ipcMain } from "electron";
import prisma from "../helpers/prisma";

ipcMain.on("get-archives", async () => {
  const data = await prisma.uploadItem.findMany();

  return data;
});

ipcMain.on("get-one-archive", async (event, arg) => {});

ipcMain.on("create-archive", async (event, arg) => {});

ipcMain.on("update-archive", async (event, arg) => {});

ipcMain.on("delete-archive", async (event, arg) => {});
