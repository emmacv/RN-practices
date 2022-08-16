import { AxiosResponse } from "axios";
import React from "react";
import axiosInstance from "../api/axios"

interface Config {
  params: {
    limit: number;
    page: number;
    offset: number;
  }
}

const usePokemonApi = ({ params }: Config) => {
  const [data, setData] = React.useState<PokemonSingleType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(params.offset);

  const { limit } = params;

  const mapPokemons = (pokemonArray: PokemonResultType[]) => pokemonArray.map(pokemon => {
   const [id] = /(?<=\/)\d+/.exec(pokemon?.url) as RegExpExecArray;
/*    const url = pokemon?.url.split("/");
   const id = url[url.length - 2]; */

    return {
      ...pokemon,
      id,
      pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  const loadItems = async () => {
    try {
      const result = await axiosInstance.get<PokemonType, AxiosResponse<PokemonType>>(`/?offset=${offset}&limit=${limit}`);

      setData(prev => [...prev, ...mapPokemons(result.data.results)]);

      setOffset(prev => prev + limit);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }

  };

  React.useEffect(() => {
    loadItems();
  }, []);

  return {
    data,
    isLoading,
    setIsLoading,
    loadItems,
  }

};

export default usePokemonApi;
