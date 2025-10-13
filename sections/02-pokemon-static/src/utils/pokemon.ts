import type { Pokemon, PokemonListResponse } from "../interfaces";


export const fetchPokemonList = async (limit?: number) => {
    const url = new URL('https://pokeapi.co/api/v2/pokemon');
    if (limit) url.searchParams.set('limit', limit.toString());

    const response = await fetch(url);
    const data = await response.json() as PokemonListResponse;

    data.results = await Promise.all(data.results.map(async pokemon => {
        pokemon.data = await (await fetch(pokemon.url)).json() as Pokemon;
        return pokemon;
    }));

    return data;
};