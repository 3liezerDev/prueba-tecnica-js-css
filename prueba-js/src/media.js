const extractAges = (data) =>
  data
    .filter((item) => typeof item.edad === "number")
    .map((item) => item.edad);

const calculateAverage = (ages) => {
  if (ages.length === 0) return 0;
  const total = ages.reduce((sum, age) => sum + age, 0);
  return total / ages.length;
};

export default (json) => {
    // Do your thing here!
    if (!Array.isArray(json)) return 0;

  const ages = extractAges(json);
  return calculateAverage(ages);
  };
  