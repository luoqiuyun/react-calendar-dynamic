import React, { useRef, useEffect } from "react";

const usePrevLocation = (location) => {

  const prevLocRef = useRef(location)
  useEffect(() => {
    prevLocRef.current = location
  }, [location]);

  return prevLocRef.current;
};

export default usePrevLocation;
