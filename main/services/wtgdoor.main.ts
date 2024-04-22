import { ipcMain } from "electron";
import prisma from "../helpers/prisma";
import { WTGDoorModel } from "../../prisma/zod";

ipcMain.on("get-wtgdoors", async (event, arg) => {
  const data = await prisma.wTGDoor.findMany();

  if (!data) {
    event.reply("wtgdoors-not-found", data);
    throw new Error("WTG Door not found");
  }

  event.reply("wtgdoors-found", data);
});

ipcMain.on("get-one-wtgdoor", async (event, arg: { id: string }) => {
  const data = await prisma.wTGDoor.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("wtgdoor-not-found", data);
    throw new Error("WTG Door not found");
  }

  event.reply("wtgdoor-found", data);
});

ipcMain.on("create-wtgdoor", async (event, arg) => {
  const validSchema = WTGDoorModel.parse(arg);

  if (!validSchema) {
    event.reply("invalid-schema", validSchema);
    throw new Error("Invalid Schema");
  }

  const data = await prisma.wTGDoor.create({
    data: validSchema,
  });

  if (!data) {
    event.reply("wtgdoor-not-created", data);
    throw new Error("WTG Door not created");
  }

  event.reply("wtgdoor-created", data);
});

ipcMain.on("update-wtgdoor", async (event, arg: { id: string; data: any }) => {
  const validSchema = WTGDoorModel.parse(arg.data);

  if (!validSchema) {
    event.reply("invalid-schema", validSchema);
    throw new Error("Invalid Schema");
  }

  const data = await prisma.wTGDoor.update({
    where: {
      id: arg.id,
    },
    data: validSchema,
  });

  if (!data) {
    event.reply("wtgdoor-not-updated", data);
    throw new Error("WTG Door not updated");
  }

  event.reply("wtgdoor-updated", data);
});

ipcMain.on("delete-wtgdoor", async (event, arg: { id: string }) => {
  const data = await prisma.wTGDoor.delete({
    where: {
      id: arg.id,
    },
  });

  if (!data) {
    event.reply("wtgdoor-not-deleted", data);
    throw new Error("WTG Door not deleted");
  }

  event.reply("wtgdoor-deleted", data);
});
