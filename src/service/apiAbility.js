import axios from "axios";

const apiAbility = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default apiAbility;
