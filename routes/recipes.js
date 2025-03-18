const express = require("express");
const router = express.Router();
const recipes = require("../data/recipes");

// Get all recipes
router.get("/", (req, res) => {
  const fullRecipes = recipes.map(recipe => ({
    ...recipe,
    image: `https://myfoodify-backend.onrender.com${recipe.image}`, // Image served from public/images
  }));
  res.json(fullRecipes);
});

// Get a single recipe by ID
router.get("/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  // Add full image URL to the individual recipe
  const fullRecipe = {
    ...recipe,
    image: `https://myfoodify-backend.onrender.com${recipe.image}`, // Image served from public/images
  };
  
  res.json(fullRecipe);
});

module.exports = router;
