import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from "react";
import { getAccessToken, setAccessToken, getUser, getChecks, getRefreshToken, setChecks, setRefreshToken, setUser } from '../lib/localStorage';

type DropContextProps = {
  folderInfo: any | null;
  foldersLocation: [];
  folderLocation: string;
  onFolderDropChange: () => void;
  setFoldersLocation: React.Dispatch<React.SetStateAction<[]>>;
  onFolderRemove: () => void;
  onReset: () => void;
  setFolderLocation: React.Dispatch<React.SetStateAction<string>>;
  isAnySelected: boolean;
}

const DropContext = createContext<DropContextProps>({
  folderInfo: null,
  folderLocation: "",
  foldersLocation: [],
  isAnySelected: false,
  onFolderDropChange: () => { },
  onFolderRemove: () => { },
  onReset: () => { },
  setFolderLocation: () => { },
  setFoldersLocation: () => { },
})

const localChecks = getChecks() ?? {}

export const DropProvider = ({ children }: PropsWithChildren) => {
  const [folderInfo, setFolderInfo] = useState(null);
  const [foldersLocation, setFoldersLocation] = useState(localChecks.foldersLocation ?? []);

  const [folderLocation, setFolderLocation] = useState("");
  const isAnySelected = folderInfo && 'door' in folderInfo ? Object.keys(folderInfo)?.length > 2 : !!folderInfo

  function onFolderDropChange() { }

  function onFolderRemove() {
    setFolderInfo(null);
  }

  function onReset() { }

  return <DropContext.Provider value={{
    folderInfo,
    folderLocation,
    foldersLocation,
    isAnySelected,
    onFolderDropChange,
    onFolderRemove,
    onReset,
    setFolderLocation,
    setFoldersLocation,
  }}>
    {children}
  </DropContext.Provider>
}

export function useDrop() {
  const context = useContext(DropContext)

  if (!context) {
    throw new Error('The useDrop hook must be used inside the DropProvider')
  }

  return context
}