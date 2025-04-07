const capitalizeWords = (text) =>
  text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

const getFullName = ({ nombre, apellido, apellido2 }) => {
  const parts = [nombre, apellido];

  if (apellido2 && apellido2.trim() !== "") {
    parts.push(apellido2);
  }

  return parts.map(capitalizeWords).join(" ");
};

export default (json) => {
  // Do your thing here!
  if (!Array.isArray(json)) return [];
  return json.map(getFullName);
};
