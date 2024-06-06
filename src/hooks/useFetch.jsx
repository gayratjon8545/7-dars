// import { useState, useEffect } from "react";

// export function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       setIsPending(true);
//       try {
//         const request = await fetch(url);
//         if (!request.ok) {
//           throw new Error("hello");
//         }
//         const response = await request.json();
//         setData(response);
//         setIsPending(false);
//       } catch (err) {
//         setError(err.message);
//         console.log(err.me);
//         setIsPending(false);
//       }
//     };
//     getData();
//   }, [url]);

//   return { data, isPending, error };
// }

import { useState, useEffect } from "react";

function useFetch(url) {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Something went wrong :(");
        }
        const response = await request.json();
        setTodos(response);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        console.log(error.message);
        setError(error.message);
      }
    };
    getData();
  }, [url]);

  return { todos, isPending, error };
}

export { useFetch };
