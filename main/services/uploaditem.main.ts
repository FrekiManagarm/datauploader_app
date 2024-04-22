import { ipcMain } from "electron";
import prisma from "../helpers/prisma";
import { UploadItemModel } from "../../prisma/zod";

ipcMain.on("get-uploaditem", async (event, arg) => {
  const data = await prisma.uploadItem.findMany();

  if (!data) {
    event.reply("uploaditems-not-found", data);
    throw new Error("UploadItem not found");
  }

  event.reply("uploaditems-found", data);
});

ipcMain.on("get-one-uploaditem", async (event, arg: { id: string }) => {
  const data = await prisma.uploadItem.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("uploaditem-not-found", data);
    throw new Error("UploadItem not found");
  }

  event.reply("uploaditem-found", data);
});

ipcMain.on("create-uploaditem", async (event, arg) => {
  const validSchema = UploadItemModel.parse(arg);

  const data = await prisma.uploadItem.create({
    data: validSchema,
  });

  if (!data) {
    event.reply("uploaditem-not-created", data);
    throw new Error("UploadItem not created");
  }

  event.reply("uploaditem-created", data);
});

ipcMain.on(
  "update-uploaditem",
  async (event, arg: { id: string; data: any }) => {
    const validSchema = UploadItemModel.parse(arg.data);

    const data = await prisma.uploadItem.update({
      where: {
        id: arg.id,
      },
      data: validSchema,
    });

    if (!data) {
      event.reply("uploaditem-not-updated", data);
      throw new Error("UploadItem not updated");
    }

    event.reply("uploaditem-updated", data);
  },
);

ipcMain.on("delete-uploaditem", async (event, arg: { id: string }) => {
  const data = await prisma.uploadItem.delete({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("uploaditem-not-deleted", data);
    throw new Error("UploadItem not deleted");
  }

  event.reply("uploaditem-deleted", data);
});
