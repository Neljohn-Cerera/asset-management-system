import { useEffect, useState } from "react";
type GetResponse<T> = {
  data?: T;
  error?: string;
};

/**
 * CUSTOM HOOK FOR HTTP GET REQUEST
 *
 * @param asyncFunction a promise function for fetching data
 * @param execute IF true trigers fetching data ELSE none
 * @returns status ==> idle | pending | success | error
 * @returns data ==> T | null
 * @returns error ==> string
 */
const useGetData = <T, E = string>(
  asyncFunction: () => Promise<GetResponse<T>>,
  execute: boolean
) => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) {
        setStatus("pending");
        setData(null);
        setError(null);
        asyncFunction()
          .then((response: any) => {
            setData(response.data);
            setStatus("success");
          })
          .catch((error: any) => {
            setError(error);
            setStatus("error");
          });
      }
    };
    if (execute) {
      fetchData();
    }

    // cleanup
    return () => {
      isMounted = false;
    };
  }, [asyncFunction, execute]);
  return { status, data, error };
};

export default useGetData;
