
export const dedup = <T>(inputArray: Array<T>): Array<T> => {
  return inputArray.filter((description, index) => inputArray.indexOf(description) === index);
};

export const cleanDescriptionsIntoDescription = (descriptions: Array<string>): string => {
  let parsedDescriptions = descriptions.map((description) => description.replace(/POK.MON/g, "Pokemon"));
  parsedDescriptions = parsedDescriptions.map((description) => description.replace(/\u000c/u, " ").trim());
  parsedDescriptions = parsedDescriptions.map((description) => description.replace(/\n/g, " ").trim());
  const description = parsedDescriptions.join(" ");
  return description;
}