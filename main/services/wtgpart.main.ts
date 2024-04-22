import { ipcMain } from "electron";
import prisma from "../helpers/prisma";

ipcMain.on("get-wtgparts", async (event, arg) => {});

ipcMain.on("get-one-wtgpart", async (event, arg) => {});

ipcMain.on("create-wtgpart", async (event, arg) => {});

ipcMain.on("update-wtgpart", async (event, arg) => {});

ipcMain.on("delete-wtgpart", async (event, arg) => {});
