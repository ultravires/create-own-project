import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 15 * 1000,
  withCredentials: true,
})

axiosInstance.interceptors.response.use((response) => {
  return response.data
})

export default axiosInstance
