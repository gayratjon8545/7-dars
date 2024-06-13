import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext() must be i the GlobakContextProvider()");
  }
  return context;
}

export { useGlobalContext };
