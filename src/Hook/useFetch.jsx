import { useState, useEffect } from "react";

export const useFetch = (api) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const getData = async ()=> {
          
            try {
                setIsLoading(true)
                const res = await fetch(api)
                const result = await res.json()
                setData(result) 
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false)
            }
        }
        getData()
    }, [api])
    return {data, isLoading}
}