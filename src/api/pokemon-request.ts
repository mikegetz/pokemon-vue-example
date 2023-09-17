import axios from "axios";
import { dedup, cleanDescriptionsIntoDescription } from "../util/utilities";

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

type FlavorText = {
  flavor_text: string
  language: {
    name: string
  }
  version: {
    name: string
  }
}

const VERSIONS = ["red" , "blue" , "yellow" , "gold"];

export const loadDescription = async (url) => {
  const speciesResult = await genericPokemonAPIRequest(url);
  let descriptions: Array<FlavorText> = speciesResult.data.flavor_text_entries;
  descriptions = descriptions.filter((description) => description.language.name === "en");
  descriptions = descriptions.filter((description) => VERSIONS.includes(description.version.name));
  descriptions = descriptions.slice(0, 5);

  let parsedDescriptions: Array<string> = descriptions.map((description) => description.flavor_text);
  parsedDescriptions = dedup<string>(parsedDescriptions);
  const description = cleanDescriptionsIntoDescription(parsedDescriptions);
  return description;
};