import React from 'react'
const { AxiosProvider } = require('react-axios')
import { api_domain, api_slug } from '../../env.json'
import axios, { AxiosRequestConfig } from 'axios'
import { useSelector } from 'react-redux'
import { datasetSelector } from '../redux/selectors'

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${api_domain}/${api_slug}`,
  timeout: 6000,
  headers: {},
  responseType: 'json',
}

export let axiosInstance = axios.create(axiosConfig)

const Provider = ({ children }: any) => {
  const auth_token: string = useSelector((state) =>
    datasetSelector(state, 'auth_token')
  )

  const axiosInst = React.useMemo(() => {
    let config = axiosConfig
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${auth_token}`,
    }
    return axios.create(config)
  }, [auth_token])

  return <AxiosProvider instance={axiosInst}>{children}</AxiosProvider>
}
export default Provider
