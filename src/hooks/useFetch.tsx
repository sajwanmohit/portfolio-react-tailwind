import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          setData(result)
          setLoading(false)
        })
    }, 2000) // 2 second delay

    return () => clearTimeout(timer)

  }, [url])

  return { data, loading };
}

export default useFetch;
