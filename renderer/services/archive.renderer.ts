import { ipcRenderer } from "electron";
import { Archive } from "../../main/database/generated/client";

export const getArchives = () => {
  let archivesGet: Archive[] | null;
  let error: string | null;

  ipcRenderer.send("get-archives");

  ipcRenderer.on("archives-found", (event, archives: Archive[]) => {
    archivesGet = archives;
  });

  ipcRenderer.on("archives-not-found", () => {
    archivesGet = null;
    error = "Archives not found";
  });

  return {
    archivesGet,
    error,
  };
};

export const createArchive = () => {};
