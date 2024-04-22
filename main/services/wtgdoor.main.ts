import { ipcMain } from "electron";
import prisma from "../helpers/prisma";

ipcMain.on("get-wtgdoors", async (event, arg) => {});

ipcMain.on("get-one-wtgdoor", async (event, arg) => {});

ipcMain.on("create-wtgdoor", async (event, arg) => {});

ipcMain.on("update-wtgdoor", async (event, arg) => {});

ipcMain.on("delete-wtgdoor", async (event, arg) => {});
