import { ipcMain } from "electron";
import prisma from "../helpers/prisma";
import { ArchiveModel } from "../../prisma/zod";

ipcMain.on("get-archives", async (event, arg) => {
  const data = await prisma.uploadItem.findMany();

  if (!data) {
    event.reply("archives-not-found", data);
    throw new Error("Archives not found");
  }

  event.reply("archives-found", data);
});

ipcMain.on("get-one-archive", async (event, arg: { id: string }) => {
  const data = await prisma.archive.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("archive-not-found", data);
    throw new Error("Archive not found");
  }

  event.reply("archive-found", data);
});

ipcMain.on("create-archive", async (event, arg) => {
  const validSchema = ArchiveModel.parse(arg);

  const data = await prisma.archive.create({
    data: validSchema,
  });

  if (!data) {
    event.reply("archive-not-created", data);
    throw new Error("Archive not created");
  }

  event.reply("archive-created", data);
});

ipcMain.on("update-archive", async (event, arg: { id: string; data: any }) => {
  const validSchema = ArchiveModel.parse(arg.data);

  const data = await prisma.archive.update({
    where: {
      id: arg.id,
    },
    data: validSchema,
  });

  if (!data) {
    event.reply("archive-not-updated", data);
    throw new Error("Archive not updated");
  }

  event.reply("archive-updated", data);
});

ipcMain.on("delete-archive", async (event, arg: { id: string }) => {
  const data = await prisma.archive.delete({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("archive-not-deleted", data);
    throw new Error("Archive not deleted");
  }

  event.reply("archive-deleted", data);
});
