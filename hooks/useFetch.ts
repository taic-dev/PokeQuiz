import React, { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const useFetch = (url: string, config: AxiosRequestConfig) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect((() =>  {
    try {
      (async()=>{
        const response: AxiosResponse = await axios.get(url);
        setData(response);
      })();
    }catch(e) {
      console.log(e);
    }
  }),[])

  return { data }
}

export default useFetch
