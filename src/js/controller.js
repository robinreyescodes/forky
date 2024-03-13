import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from '../js/model.js';
import recipeViews from './views/recipeViews.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

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

// load in all of the recipes and watch for any changes
// to the hash in the url from recipeViews.js
function init() {
  recipeViews.addHandlerRender(controlRecipes);
}

init();
