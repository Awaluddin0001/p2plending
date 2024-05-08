// useApi.ts
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

interface ApiResponse<T> {
  loading: boolean;
  response: T | null;
  fetchData: (
    method: string,
    url: string,
    endpoint: string,
    data?: any,
    params?: any
  ) => Promise<void>;
}

const useApi = <T>(): ApiResponse<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);

  const fetchData = async (
    method: string,
    url: string,
    endpoint: string,
    data?: any,
    params?: any /* eslint-disable-next-line */
  ) => {
    setLoading(true);
    try {
      const fullUrl = url + endpoint;
      let result: AxiosResponse<T>;
      switch (method) {
        case "get":
          result = await axios.get<T>(fullUrl, { params });
          break;
        case "post":
          result = await axios.post<T>(fullUrl, data);
          break;
        case "put":
          result = await axios.put<T>(fullUrl, data);
          break;
        case "delete":
          result = await axios.delete<T>(fullUrl);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
      setResponse(result.data);
    } catch (error) {
      console.error("API Error:", error);
      setResponse(null);
    }
    setLoading(false);
  };

  return { loading, response, fetchData };
};

export default useApi;
