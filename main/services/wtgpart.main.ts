import { ipcMain } from "electron";
import prisma from "../helpers/prisma";
import { WTGPartModel } from "../../prisma/zod";

ipcMain.on("get-wtgparts", async (event, arg) => {
  const data = await prisma.wTGPart.findMany();

  if (!data) {
    event.reply("wtgparts-not-found", data);
    throw new Error("WTG Parts not found");
  }

  event.reply("wtgparts-found", data);
});

ipcMain.on("get-one-wtgpart", async (event, arg: { id: string }) => {
  const data = await prisma.wTGPart.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("wtgpart-not-found", data);
    throw new Error("WTG Part not found");
  }

  event.reply("wtgpart-found", data);
});

ipcMain.on("create-wtgpart", async (event, arg) => {
  const validSchema = WTGPartModel.parse(arg);

  if (!validSchema) {
    event.reply("invalid-schema", validSchema);
  }

  const data = await prisma.wTGPart.create({
    data: validSchema,
  });

  if (!data) {
    event.reply("wtgpart-not-created", data);
    throw new Error("WTG Part not created");
  }

  event.reply("wtgpart-created", data);
});

ipcMain.on("update-wtgpart", async (event, arg: { id: string; data: any }) => {
  const validSchema = WTGPartModel.parse(arg.data);

  const data = await prisma.wTGPart.update({
    where: {
      id: arg.id,
    },
    data: validSchema,
  });

  if (!data) {
    event.reply("wtgpart-not-updated", data);
    throw new Error("WTG Part not updated");
  }
});

ipcMain.on("delete-wtgpart", async (event, arg: { id: string }) => {
  const data = await prisma.wTGPart.delete({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("wtgpart-not-deleted", data);
    throw new Error("WTG Part not deleted");
  }
});
