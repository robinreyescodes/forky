import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from '../js/model.js';
import recipeViews from './views/recipeViews.js';
import searchViews from './views/searchViews.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

// returns and loads recipes to the UI
async function controlRecipes() {
  // grabbing recipe
  try {
    const id = window.location.hash.slice(1);
    if (!id) return; //guard clause, gets out of the block. when function is loaded, nothing happens

    // console.log(id);
    recipeViews.renderSpinner();

    // 1) load recipe
    await model.loadRecipe(id);

    // render recipe
    recipeViews.render(model.state.recipe);
  } catch (err) {
    recipeViews.renderError();
  }
}

async function controlSearchResults() {
  try {
    //get search query
    const query = searchViews.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
}

// controlSearchResults();

// load in all of the recipes and watch for any changes
// to the hash in the url from recipeViews.js
function init() {
  recipeViews.addHandlerRender(controlRecipes);
  searchViews.addHandlerSearch(controlSearchResults);
}

init();
