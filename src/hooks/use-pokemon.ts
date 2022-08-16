import { useState, useEffect } from 'react';
import axiosInstance from "../api/axios"

const usePokemon = (pokemon: number | string) => {
  const [data, setData] = useState<Pokemon>({} as Pokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>(undefined);

  const getPokemonInfo = async () => {
    try {
      const result = await axiosInstance.get<Pokemon>(`/${pokemon}`);

      setData(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return {
    data,
    isLoading,
    setIsLoading,
    error,
  };
}

export default usePokemon;