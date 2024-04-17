import { useEffect, useState } from "react";

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    setOnline(navigator.onLine);

    const offlineHandler = () => {
      setOnline(false);
    };

    const onlineHandler = () => {
      setOnline(true);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return online;
}

export default useOnline;
