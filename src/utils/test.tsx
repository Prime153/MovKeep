import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (api: string) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const abortController = new AbortController();

  useEffect(() => {
    const fetchData = async (api: string) => {
      try {
        const response = await axios(api);
        setResponse(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(api);
    return () => abortController.abort();
  }, []);

  return [response, error, loading];
};

export default useAxios;
