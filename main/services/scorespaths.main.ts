import { ipcMain } from "electron";
import prisma from "../helpers/prisma";
import { ScoresPathsModel } from "../../prisma/zod";

ipcMain.on("get-scorespaths", async (event, arg) => {
  const data = await prisma.scoresPaths.findMany();

  if (!data) {
    event.reply("scorespaths-not-found", data);
    throw new Error("ScoresPaths not found");
  }

  event.reply("ScoresPaths found", data);
});

ipcMain.on("get-on-scorespaths", async (event, arg: { id: string }) => {
  const data = await prisma.scoresPaths.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("scorepath-not-found", data);
    throw new Error("Score Path not found");
  }

  event.reply("scorepath-found", data);
});

ipcMain.on("create-scorespaths", async (event, arg) => {
  const validSchema = ScoresPathsModel.parse(arg);

  const data = await prisma.scoresPaths.create({
    data: validSchema,
  });

  if (!data) {
    event.reply("scorepath-not-created", data);
    throw new Error("Score Path not created");
  }

  event.reply("scorepath-created", data);
});

ipcMain.on(
  "update-scorespaths",
  async (event, arg: { id: string; data: any }) => {
    const validSchema = ScoresPathsModel.parse(arg.data);

    const data = await prisma.scoresPaths.update({
      where: {
        id: arg.id,
      },
      data: validSchema,
    });

    if (!data) {
      event.reply("scorepath-not-udpated", data);
      throw new Error("ScorePath not updated");
    }

    event.reply("scorepath-updated", data);
  },
);

ipcMain.on("delete-scorespaths", async (event, arg: { id: string }) => {
  const data = await prisma.scoresPaths.delete({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("scorepath-not-deleted", data);
    throw new Error("ScorePath not deleted");
  }

  event.reply("scorepath-deleted", data);
});
