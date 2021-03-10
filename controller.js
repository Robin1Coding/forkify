import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'


// import icons from '../img/icons.svg' // parcel 1
import icons from 'url:../img/icons.svg' // parcel 2   // '..' means the parent folder

import 'core-js/stable' // we import that to make older browsers stable
import 'regenerator-runtime/runtime' // we import that to make older browsers stable
import { async } from 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1) // taking the id. We are using slice method to log the id without the hash

    // guard clause
    if (!id) return

    // rendering the spinner
    recipeView.renderSpinner();

    // 1 loading recipe
    await model.loadRecipe(id) // it returns the promise (one async function calling another async function)

    // 2 rendering recipe
    recipeView.render(model.state.recipe); // it will accept data and store it into the object

  } catch (err) { // catching errors
    recipeView.renderError()
  }
};

// calling async function to loadSearchResults
const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner()

    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) render results
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results)

  } catch(err){
    console.log(err);
  }
}

// here we impleted the publisher-subscriber pattern
const init = function(){
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}
init();

// ['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipes)) // it basiclly the same as below

// changing the hash
// window.addEventListener('hashchange', controlRecipes)
// this event is fired after the page is fully loaded
// window.addEventListener('load', controlRecipes)


