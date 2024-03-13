import { API_URL } from '../js/config';
import { async } from 'regenerator-runtime';
import { getJSON } from '../js/helpers';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

//async function to fetch recipe data from api
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    // console.log(recipe);
  } catch (err) {
    //temp error handling
    console.log(err);
    throw err;
  }
}

// https://forkify-api.herokuapp.com/api/v2/recipes
export async function loadSearchResults(query) {
  try {
    state.search.query = query;
    console.log(state.search);
    const data = await getJSON(`${API_URL}?search=${query}`);

    // takes each recipe from data object and creates a new object out of the information found
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

loadSearchResults('pizza');
