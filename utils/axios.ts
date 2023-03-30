import { type AxiosError } from 'axios';

export async function getAxiosErrorMessage (error: AxiosError): Promise<any> {
  if (error.response != null) {
    return error.response.data;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
}
