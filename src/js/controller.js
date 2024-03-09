import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from '../js/model.js';
import recipeViews from './views/recipeViews.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// showRecipe();

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
    alert(err);
  }
}

// this avoids any repetition of code
//
['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, controlRecipes);
});

//5ed6604591c37cdc054bc90b
