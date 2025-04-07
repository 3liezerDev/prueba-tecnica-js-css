const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z]/g, ""); 

const areAnagrams = (a, b) => {
  const cleanA = normalize(a);
  const cleanB = normalize(b);

  if (cleanA.length !== cleanB.length) return false;

  return [...cleanA].sort().join("") === [...cleanB].sort().join("");
};

export default (word1, word2) => {
    // Do your thing here!
    return areAnagrams(word1, word2);
  };
  