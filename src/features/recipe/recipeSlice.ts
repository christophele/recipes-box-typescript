import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipeList, IRecipeItem } from '../../data/models/recipe.model';

export interface RecipeState {
    allRecipes: IRecipeItem[];
    recipe: any;

}

const initialState: RecipeState = {
    allRecipes: [],
    recipe: {}
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipes: (state, action: PayloadAction<any>) => {
            state.allRecipes = action.payload;
        }
    }
});

export const {addRecipes} = recipeSlice.actions;
// export const recipeReducer = recipeSlice.reducer;

export const getAllRecipes = (state:RecipeState) => state.recipe.allRecipes;

export default recipeSlice.reducer;