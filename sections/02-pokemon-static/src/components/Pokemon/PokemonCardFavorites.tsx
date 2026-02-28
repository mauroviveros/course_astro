import { fetchPokemon } from "@utils/pokemon";
import { createResource, createSignal, Show, type Component } from "solid-js";


interface Props {
  id: string;
}

export const PokemonCardFavorites: Component<Props> = ({ id }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const [resource] = createResource(async () => {
    const response = await fetchPokemon(id);
    return response;
  });

  const deleteFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as string[];
    const newFavorites = favorites.filter(favId => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
    // Aquí podrías agregar lógica para actualizar el estado de los favoritos en el componente padre si es necesario
  }

  return (
    <Show when={isVisible()}>
      <button
        class="rounded flex flex-col justify-center items-center border [&>img]:size-24 hover:bg-red-500/30 cursor-pointer"
        onClick={deleteFromFavorites}
      >
        <img
          src={resource()?.sprites.other?.['official-artwork'].front_default}
          alt={resource()?.name}
        />
        <span class="capitalize">#{resource()?.id} {resource()?.name}</span>
      </button>
    </Show>
  );
};