import React, { useState } from "react";
import "./style.css";
import Autosuggest from "react-autosuggest";
import pokemonNamesJson from "../../database/pokemonNames.json";

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : pokemonNamesJson.names
        .filter(
          (poke) => poke.toLowerCase().slice(0, inputLength) === inputValue
        )
        .slice(0, 4);
};

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

const getSuggestionValue = (suggestion) => suggestion;

function MainButtonElement({ name, setName, handlerSubmit }) {
  const [pokemonNames, setPokemonNames] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setPokemonNames(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setPokemonNames([]);
  };

  const onChange = (event, { newValue }) => {
    setName(newValue);
  };

  return (
    <div className="mainButtonElement">
      <img
        className="title"
        src="https://fontmeme.com/permalink/200620/63003a6b38173454d2a74aa30a82d7f8.png"
        alt="fonte-de-pokemon"
        border="0"
      />

      <div className="inputButtonElement">
        <Autosuggest
          suggestions={pokemonNames}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: "Digite o nome do Pokemon",
            value: name,
            onChange: onChange,
          }}
        />

        <button className="mainButton" type="submit" onClick={handlerSubmit}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default MainButtonElement;
