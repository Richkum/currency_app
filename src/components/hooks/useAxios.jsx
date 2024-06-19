import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    try {
      setLoaded(true);
      const response = await axios(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, error, loaded];
};

export default useAxios;
