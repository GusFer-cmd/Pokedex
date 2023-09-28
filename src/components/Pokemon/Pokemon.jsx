import { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./Pokemon.css";
import axios from "axios";
import Button from "../Button/Button";

const Pokemon = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    getPokemon();
  }, [id, search]);

  const getPokemon = () => {
    if (search) {
      // Se houver um termo de pesquisa, busque o Pokémon por nome
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((response) => {
          setName(response.data.name);
          setId(response.data.id);
          setImage(response.data.sprites.front_default);
          setSearchedPokemon(response.data); // Defina o Pokémon pesquisado
        })
        .catch((error) => {
          console.log(error);
          setSearchedPokemon(null); // Limpe o Pokémon pesquisado em caso de erro
        });
    } else {
      // Caso contrário, busque o Pokémon pelo ID
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          setName(response.data.name);
          setImage(response.data.sprites.front_default);
          setId(response.data.id);
          setSearchedPokemon(null); // Limpe o Pokémon pesquisado ao buscar por ID
        })
        .catch((error) => {
          console.log(error);
          setSearchedPokemon(null); // Limpe o Pokémon pesquisado em caso de erro
        });
    }
  };

  const onType = (event) => {
    setInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
  };

  return (
    <>
      <img className="pokemon" src={image} alt="pokemon" />

      <h1 className="pokemon__data">
        <span className="pokemon__number">{id}</span> -
        <span className="pokemon__name"> {name}</span>
      </h1>

      <Search
        type="search"
        placeholder="Name of Number"
        required={true}
        value={input}
        onChange={(event) => onType(event.target.value)}
        onSubmit={onSubmit}
      />

      {searchedPokemon && (
        <>
          <img
            className="pokemon"
            src={searchedPokemon.sprites.front_default}
            alt="Searched Pokemon"
          />
        </>
      )}

      <>
        <Button onNext={() => setId(id + 1)} onPrev={() => setId(id - 1)} />
      </>
    </>
  );
};

export default Pokemon;
