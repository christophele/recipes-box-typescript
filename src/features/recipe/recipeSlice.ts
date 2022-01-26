import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipeList, IRecipeItem } from '../../data/models/recipe.model';

export interface RecipeState {
    allRecipes: IRecipeItem[];
    favoritesRecipes: IRecipeItem[];
    recipe: any;

}

const initialState: RecipeState = {
    allRecipes: [],
    favoritesRecipes: [],
    recipe: {}
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipes: (state, action: PayloadAction<any>) => {
            state.allRecipes = action.payload;
        },
        addFavoriteRecipe: (state, action: PayloadAction<any>) => {
            state.favoritesRecipes.push(action.payload);
        }
    }
});

export const {addRecipes, addFavoriteRecipe} = recipeSlice.actions;
// export const recipeReducer = recipeSlice.reducer;

export const getAllRecipes = (state:RecipeState) => state.recipe.allRecipes;
export const getAllFavoritesRecipes = (state:RecipeState) => state.recipe.favoritesRecipes;

export default recipeSlice.reducer;