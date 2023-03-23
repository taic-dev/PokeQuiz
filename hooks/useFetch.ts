import React, { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const useFetch = (url: string, config: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);

  useEffect((() =>  {
    try {
      (async()=>{
        const response: AxiosResponse = await axios.get(url);
        setResponse(response);
      })();
    }catch(e) {
      console.log(e);
    }
  }),[])

  return response
}

export default useFetch
