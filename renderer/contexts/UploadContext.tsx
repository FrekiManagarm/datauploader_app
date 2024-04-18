import React, { PropsWithChildren, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import useOnline from '../hooks/useOnline';
import { useAuth } from "./AuthContext";

type UploadContextProps = {
  paths: [];
  setUploadingPaths: (paths: void) => void;
  onUploadStart: (folders: string[]) => void;
  archivesData: [];
  setArchivesData: React.Dispatch<React.SetStateAction<[]>>;
  uploadsData: [];
  isLoading: boolean;
  setUploadsData: React.Dispatch<React.SetStateAction<[]>>;
  isUploading: boolean;
  setIsUploading: React.Dispatch<React.SetStateAction<boolean>>;
  isArchiving: boolean;
  resetUpload: () => void;
  onArchivationStart: () => void;
  isProcessStarted: boolean;
  setTurbinePath: React.Dispatch<React.SetStateAction<string>>
}

const UploadContext = createContext<UploadContextProps>({
  paths: [],
  archivesData: [],
  isArchiving: false,
  isLoading: false,
  isProcessStarted: false,
  isUploading: false,
  onArchivationStart: () => { },
  onUploadStart: () => { },
  resetUpload: () => { },
  setArchivesData: () => { },
  setIsUploading: () => { },
  setUploadingPaths: () => { },
  setUploadsData: () => { },
  uploadsData: [],
  setTurbinePath: () => { }
});

export const UploadProvider = ({ children }: PropsWithChildren) => {
  const isOnline = useOnline();
  const { user } = useAuth();

  const [paths, setPaths] = useState<[]>([]);
  const [isArchiving, setIsArchiving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const setUploadingPaths = useCallback(
    (paths: any) => {
      setPaths(paths)
    }, [])
  const intervalRef = useRef(null)
  const [archivesData, setArchivesData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadsData, setUploadsData] = useState<[]>([]);
  const [turbinePath, setTurbinePath] = useState("");

  const skipFirst = useRef(true)
  const isOnlineRef = useRef(false)
  const shouldUploadAgain = useRef(false)
  const isProcessStartedRef = useRef(false)

  useEffect(() => {
    isOnlineRef.current = isOnline
  }, [isOnline]);

  /***************************************************************************/
  /***************************** ARCHIVATION (Step 1) ************************/
  /***************************************************************************/

  const onArchivationStart = () => { }

  const getArchivationStatus = () => { }

  /***************************************************************************/
  /***************************** UPLOAD (Step 2) ************************/
  /***************************************************************************/

  const resetUpload = useCallback(() => {

  }, [])

  const onUploadStart = (folders: string[]) => { }

  const getUploadStatus = () => { }

  /***************************************************************************/
  /********************************** PROVIDER *******************************/
  /***************************************************************************/

  useEffect(() => {
    if (isArchiving) {
      getArchivationStatus()
    } else if (isUploading) {
      getUploadStatus()
    }
    return () => {
      intervalRef.current = null
    };
  }, [isArchiving, isUploading]);

  return <UploadContext.Provider value={{
    archivesData,
    isArchiving,
    isLoading,
    isProcessStarted: isProcessStartedRef.current,
    isUploading,
    onArchivationStart,
    onUploadStart,
    paths,
    resetUpload,
    setArchivesData,
    setIsUploading,
    setUploadingPaths,
    setUploadsData,
    uploadsData,
    setTurbinePath,
  }}>
    {children}
  </UploadContext.Provider>
}

export function useUpload() {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error("The useUpload hook must be used inside the UploadProvider")
  }

  return context;
}