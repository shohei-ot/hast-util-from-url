import axios, { AxiosRequestConfig } from 'axios'

export default async (
  url: string,
  requestConfig: Partial<AxiosRequestConfig> = {}
): Promise<string> => {
  const axiosConfig: Partial<AxiosRequestConfig> = Object.assign(
    requestConfig,
    {
      responseType: 'text'
    }
  )
  const response = await axios.get(url, axiosConfig)
  return response.data
}
