const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const fetchRecipes = async () => {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchRecipeDetails = async (id) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchSimilarRecipes = async (id) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { fetchRecipes, fetchRecipeDetails , fetchSimilarRecipes};
