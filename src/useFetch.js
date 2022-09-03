import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   const abortController = new AbortController();
  //   setTimeout(() => {
  //     fetch(url, { signal: abortController.signal })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error('Could not fetch the data for that resource');
  //         }
  //         return res.json();
  //       })
  //       .then((data)=>{
  //         setData(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         if (err.name === 'AbortError'){
  //           console.log('Fetch aborted!')
  //         } else {
  //           setIsPending(false);
  //           setError(err.message);
  //         }
          
  //       })
  //   }, 1000);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data)=>{
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);          
        })
    }, 1000);
  
  }, [url]);

  return { data, isPending, error}
}

export default useFetch;