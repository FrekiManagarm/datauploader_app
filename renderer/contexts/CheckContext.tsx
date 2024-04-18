import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getChecks, setChecks as setCheck } from "../lib/localStorage";
// import localStorage from "../localStorage";

type CheckContextProps = {
  checks: [];
  paths: [];
  score_paths: [];
  door_paths: {};
  currentlyInCheck: any;
  pathsWithLocations: [] | never[];
  onCheckStart: () => void;
  updateChecks: () => void;
  getScore: (path: string) => void;
  setChecks: React.Dispatch<React.SetStateAction<[]>>;
  isCheckFinished: boolean;
  checkedCount: any;
  setPathsWithLocations: React.Dispatch<React.SetStateAction<[] | never[]>>;
}

const localChecks = getChecks() ?? {}

const CheckContext = createContext<CheckContextProps>({
  checks: [],
  currentlyInCheck: false,
  door_paths: {},
  paths: [],
  pathsWithLocations: [],
  score_paths: [],
  onCheckStart: () => { },
  updateChecks: () => { },
  getScore: () => { },
  setChecks: () => { },
  isCheckFinished: false,
  setPathsWithLocations: () => { },
  checkedCount: 0,
});

export const CheckProvider = ({ children }: { children: React.ReactNode }) => {
  const [checks, setChecks] = useState(localChecks.checks ?? []);
  const [paths, setPaths] = useState(localChecks.paths ?? []);
  const [scorePaths, setScorePaths] = useState(localChecks.scorePaths ?? []);
  const [doorPaths, setDoorPaths] = useState(localChecks.doorPaths ?? {});
  const [currentlyInCheck, setCurrentlyInCheck] = useState(localChecks.currentlyInCheck ?? null);
  const [pathsWithLocations, setPathsWithLocations] = useState<[]>([]);

  const checkedCount = useMemo(() => {
    if (!checks) return 0
    return checks.filter((check: { scores: string | any[]; }) => !!check.scores?.length)?.length ?? 0
  }, [])

  const isCheckFinished = checkedCount === checks?.length

  useEffect(() => {
    const newChecksStore = { checks, paths, scorePaths, doorPaths, currentlyInCheck }

    let localChecks = getChecks() ?? null;

    setCheck({
      ...(localChecks ?? {}),
      ...newChecksStore
    });
  }, [checks, paths, scorePaths, doorPaths, currentlyInCheck]);

  function onCheckStart() { }

  function updateChecks() { }

  function getScore(path: string) { }

  return <CheckContext.Provider value={{
    checks,
    currentlyInCheck,
    door_paths: doorPaths,
    paths,
    pathsWithLocations,
    score_paths: scorePaths,
    checkedCount,
    onCheckStart,
    getScore,
    updateChecks,
    setChecks,
    isCheckFinished,
    setPathsWithLocations,
  }}>
    {children}
  </CheckContext.Provider>
}

export function useCheck() {
  const context = useContext(CheckContext);

  if (!context) {
    throw new Error("The useCheck hook must be used inside the CheckProvider")
  }

  return context;
}