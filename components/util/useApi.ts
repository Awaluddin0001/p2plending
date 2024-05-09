// useApi.ts
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

interface ApiResponse<T> {
  loading: boolean;
  resp: T | null;
  fetchData: (
    method: string,
    url: string,
    service: string,
    endpoint: string,
    data?: any,
    params?: any,
    headers?: any
  ) => Promise<void>;
}

const useApi = <T>(): ApiResponse<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resp, setResp] = useState<T | null>(null);

  const fetchData = async (
    method: string,
    url: string,
    service: string,
    endpoint: string,
    data?: any,
    params?: any,
    headers?: any /* eslint-disable-next-line */
  ) => {
    setLoading(true);
    try {
      const fullUrl = url + service + endpoint;
      let result: AxiosResponse<T>;
      switch (method) {
        case "get":
          result = await axios.get<T>(fullUrl, { params, headers });
          break;
        case "post":
          result = await axios.post<T>(fullUrl, data, { headers });
          break;
        case "put":
          result = await axios.put<T>(fullUrl, data, { headers });
          break;
        case "delete":
          result = await axios.delete<T>(fullUrl);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
      setResp(result.data);
    } catch (error) {
      console.error("API Error:", error);
      setResp(null);
    }
    setLoading(false);
  };

  return { loading, resp, fetchData };
};

export default useApi;
