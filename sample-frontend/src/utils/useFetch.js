import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ payload: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ payload: state.payload, loading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((payload) => {
        if (isCurrent.current) setState({ payload, loading: false });
      });
  }, [url, setState]);

  return state;
};
