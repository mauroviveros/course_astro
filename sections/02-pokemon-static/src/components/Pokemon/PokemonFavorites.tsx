import { createSignal, For } from "solid-js";

const getLocalStoragePokemons = () : string[] =>  {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
}

export const PokemonFavorites = () => {
  const [favorites, setFavorites] = createSignal(getLocalStoragePokemons());

  return (
    <div>
      <For each={favorites()}>
        {(id) => <p>Pokemon ID: {id}</p>}
      </For>
    </div>
  );
};