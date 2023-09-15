import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 3000,
  validateStatus: (status) => {
    return status < 400;
  },
});

export const pokemonRequest = async (name) => {
  const promise = axiosInstance.get(`/pokemon/${name}`, {});
  const { status, data } = await promise;
  return { status, data };
};

const genericPokemonAPIRequest = async (url) => {
  const promise = axiosInstance.get(url, {});
  const { status, data } = await promise;
  return { status, data };
};

export const loadDescription = async (url) => {
  const speciesResult = await genericPokemonAPIRequest(url);
  let descriptions = speciesResult.data.flavor_text_entries;
  descriptions = descriptions.filter((description) => description.language.name === "en");
  descriptions = descriptions.slice(0, 5);
  descriptions = descriptions.map((description) => description.flavor_text);
  descriptions = descriptions.filter((description, index) => descriptions.indexOf(description) === index);
  descriptions = descriptions.map((description) => description.replace(/[^a-z0-9]/gim, " ").trim());
  const description = descriptions.join(". ").concat(".");
  return description;
};