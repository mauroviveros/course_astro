
import { createSignal, createResource, For } from "solid-js";
import { fetchPokemonList } from "@utils/pokemon";
import { PokemonCardFavorites } from "./PokemonCardFavorites.tsx";

const getLocalStoragePokemons = (): string[] => {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

export const PokemonFavorites = () => {
  const [favorites] = createSignal(getLocalStoragePokemons());

  return (
    <section aria-label="Listado de Pokémon Favoritos" class="grid grid-cols-1 p-4 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <For each={favorites()}>
        {(id) => (
          // <div>{pokemon.data.name}</div>
          <PokemonCardFavorites id={id}/>
        )}
      </For>
    </section>
  );
};