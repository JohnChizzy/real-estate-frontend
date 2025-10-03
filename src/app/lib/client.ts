import axios, { AxiosRequestConfig } from "axios";
// import { ApiHeader, Body, OptionsArgs } from '@/app/lib/models/client';
import { getAccessToken } from "@/app/utils/auth-utils";

export type DefaultResponse = Record<string, unknown>;

// TODO: Should be removed
type Body = Record<string, any> | any[] | null | undefined;

type ApiHeader = {
  [key: string]: string;
};

type OptionsArgs = {
  body?: Body;
  headers?: ApiHeader;
} & AxiosRequestConfig;

/** Axios interceptors to transform error message for clientFn */
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: any) {
    const errorMessage =
      error?.response?.data?.message ??
      "Something went wrong! Please try again";
    return Promise.reject(errorMessage); //NOSONAR
  }
);

export async function client<ResponseType>(
  endpoint: string,
  { body, headers: customHeaders, ...customConfig }: OptionsArgs = {},
  sendCompleteResponse: boolean = false
) {
  const token: string | undefined = getAccessToken();

  const isFormData = body instanceof FormData;
  const headers: ApiHeader = isFormData
    ? {} // Let the browser/axios handle content-type with boundary
    : { "Content-type": "application/json; charset=UTF-8" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  let data: any;
  if (isFormData) {
    data = body;
  } else if (body) {
    data = Array.isArray(body)
      ? JSON.stringify(body)
      : JSON.stringify({ ...body });
  }

  const params: AxiosRequestConfig = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders,
    },
    ...(data && { data }),
  };

  let response: any;
  const { data: responseData } = await axios(endpoint, params);

  if (
    (responseData?.data || typeof responseData?.data === "boolean") &&
    !responseData?.pagination &&
    !sendCompleteResponse
  ) {
    const { data: resolvedResponse } = responseData;
    response = resolvedResponse;
  } else if (
    responseData?.data &&
    responseData?.pagination &&
    !sendCompleteResponse
  ) {
    const { data: resolvedResponse, pagination } = responseData;
    response = { data: resolvedResponse, pagination: pagination };
  } else {
    response = responseData;
  }

  return response;
}
