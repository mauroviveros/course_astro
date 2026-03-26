import type { Pokemon, PokemonListResponse } from "@interfaces";

const cache = new Map<string, PokemonListResponse>();

export const fetchPokemonList = async (limit?: number) => {
    const cacheKey = limit ? `limit-${limit}` : 'all';
    if (cache.has(cacheKey)) return cache.get(cacheKey)!;

    const url = new URL('https://pokeapi.co/api/v2/pokemon');
    if (limit) url.searchParams.set('limit', limit.toString());

    const response = await fetch(url);
    const data = await response.json() as PokemonListResponse;

    data.results = await Promise.all(data.results.map(async pokemon => {
        pokemon.data = await (await fetch(pokemon.url)).json() as Pokemon;
        return pokemon;
    }));

    cache.set(cacheKey, data);
    return data;
};

export const fetchPokemon  = async (id: string) => {
    // const cacheKey = `pokemon-${id}`;
    // if (cache.has(cacheKey)) return cache.get(cacheKey) as Pokemon;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json() as Pokemon;

    // cache.set(cacheKey, data);
    return data;
}