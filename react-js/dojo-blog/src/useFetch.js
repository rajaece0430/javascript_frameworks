import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();

        console.log("use effect ran");
        fetch(url, {signal: abortCont.signal })
        .then(res => {
          //console.log(res)
          if(!res.ok){
            throw Error('Unable to fetch the data from that resouce');
          }
          return res.json();
        })
        .then(data => {
          //console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch( err => {
          if(err.name === 'AbortError'){
            console.log('Fetch Aborted');
          }else{
            setIsPending(false);
            setError(err.message);
          }
        })

        return () => abortCont.abort();
      },[url])

      return {data, isPending, error};
}

export default useFetch;