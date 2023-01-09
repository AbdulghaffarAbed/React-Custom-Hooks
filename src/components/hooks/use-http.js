import { useEffect, useState } from "react";

const useHttp =(requestConfig)=>{

    const [isLoading, setIsLoading] = useStateate(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        requestConfig.method,
        requestConfig.body,
        requestConfig.headers
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

     
      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
}

export default useHttp;