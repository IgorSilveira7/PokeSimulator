import api from "../service/index";
import fs from "fs";

// Função executada fora da aplicação apenas para gerar um arquivo com os nomes dos pokemons
async function loadPokemons() {
  let json = { names: [] };
  let response = await api.get("/");

  while (response.data.next) {
    response.data.results.map((p) => json.names.push(p.name));
    response = await api.get(response.data.next);
  }

  response.data.results.map((p) => json.names.push(p.name));

  return json;
}

loadPokemons().then((json) => {
  json = JSON.stringify(json);
  fs.writeFile("pokemonNames.json", json, "utf8");
});
