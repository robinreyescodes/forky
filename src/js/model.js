import { API_URL } from '../js/config';
import { async } from 'regenerator-runtime';
import { getJSON } from '../js/helpers';
export const state = {
  recipe: {},
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
    console.log(recipe);
  } catch (err) {
    //temp error handling
    console.log(err);
  }
}
