import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export default instance;

type Status = "idle" | "pending" | "success" | "error";
type AxiosProps<T> = {
  url: string;
  body?: T;
  config: AxiosRequestConfig<any>;
};
type Response<T> = {
  data: T;
  status?: Status;
  error: string;
};

/**
 * AXIOS GET
 *
 * @param url api url
 * @param config AxiosRequestConfig
 * @returns {Promise}  { data: axios data } & { error: String }
 */
export const axiosGet = async <T>({
  url,
  config,
}: AxiosProps<null>): Promise<Response<T>> => {
  let data;
  let error;
  try {
    const res = await instance.get(url, config);
    error = null;
    data = res.data;
  } catch (err: any) {
    if (err.response) {
      error = err.response.data.message;
    }
  }
  return { data, error };
};

/**
 * AXIOS POST
 *
 * @param url api url
 * @param body request body
 * @param config axios options
 * @returns {Promise} { data: response data } & { error: String }
 */
export const axiosPost = async <BT, DT>({
  url,
  body,
  config,
}: AxiosProps<BT>): Promise<Response<DT>> => {
  let data;
  let error;
  let status: Status = "idle";
  try {
    status = "pending";
    const res = await instance.post(url, body, config);
    if (res.data) {
      status = "success";
      error = null;
      data = res.data;
    }
  } catch (err: any) {
    if (err.response) {
      status = "error";
      error = err.response.data.message;
    }
  }
  return { data, status, error };
};

/**
 * AXIOS PUT
 *
 * @param url api url
 * @param body request body
 * @param config axios options
 * @returns {Promise} { data: response data } & { error: String }
 */
export const axiosPut = async <BT, DT>({
  url,
  body,
  config,
}: AxiosProps<BT>): Promise<Response<DT>> => {
  let data;
  let error;
  let status: Status = "idle";
  try {
    status = "pending";
    const res = await instance.put(url, body, config);
    if (res.data) {
      status = "success";
      error = null;
      data = res.data;
    }
  } catch (err: any) {
    if (err.response) {
      status = "error";
      error = err.response.data.message;
    }
  }
  return { data, status, error };
};

/**
 * AXIOS DELETE
 *
 * @param url api url
 * @param config axios options
 * @returns {Promise} { data: any } & { error: String }
 */
export const axiosDelete = async <DT>({
  url,
  config,
}: AxiosProps<null>): Promise<Response<DT>> => {
  let data;
  let error;
  let status: Status = "idle";
  try {
    status = "pending";
    const res = await instance.delete(url, config);
    if (res.data) {
      status = "success";
      error = null;
      data = res.data;
    }
  } catch (err: any) {
    if (err.response) {
      status = "error";
      error = err.response.data.message;
    }
  }
  return { data, status, error };
};
