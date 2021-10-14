import { useEffect } from "react";
import { useState } from "react"


export const useFetch = (url) => {

    const [data, setData] = useState({
        loading:true,
        data:null,
    });

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(answer => {
            setData({
                loading:false,
                data:answer,
            })
        })
    },[url]);

    return data
}