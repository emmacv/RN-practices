import { AxiosResponse } from "axios";
import React from "react";
import axiosInstance from "../api/axios"

interface Config {
  params: {
    limit: number;
    page: number;
    offset?: number;
  }
}

const usePokemonApi = ({ params }: Config) => {
  const [data, setData] = React.useState<PokemonSingleType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { limit, page, offset } = params;

  const mapPokemons = (pokemonArray: PokemonResultType[]) => pokemonArray.map(pokemon => {
    const [id] = /(?<=\/)\d+/.exec?.(pokemon?.url) as RegExpExecArray;

    return {
      ...pokemon,
      id,
      pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  React.useEffect(() => {
    (async () => {
      try {
        const result = await axiosInstance.get<PokemonType, AxiosResponse<PokemonType>>(`/?offset${offset || limit}&limit${limit}`);
        
        setData(prev => [...prev, ...mapPokemons(result.data.results)]);
      } catch (error) {
        
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    data,
    isLoading,
    setIsLoading,
  }

};

export default usePokemonApi;
