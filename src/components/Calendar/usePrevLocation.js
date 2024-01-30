import { useRef, useEffect } from "react";

const usePrevLocation = (location) => {

  const prevLocRef = useRef(location)
  useEffect(() => {
    prevLocRef.current = location
  }, [location]);

  return prevLocRef.current;
};

export default usePrevLocation;
/*
use:

import { useLocation } from "react-router-dom";
import usePrevLocation from "./usePrevLocation";

const location = useLocation();
const prevLocation = usePrevLocation(location);

*/
