// import {useAppSelector} from '../../app/hooks';
import {useSelector} from 'react-redux';
import { getAllRecipes } from '../../features/recipe/recipeSlice';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';
import { IRecipeItem } from '../../data/models/recipe.model';
export default function RecipeListing() {
    const recipes = useSelector(getAllRecipes);

    return (
        <Grid container spacing={10}>
            {
                recipes && recipes.map((recipe:IRecipeItem) =>
                <Grid item xs={5} md={5} lg={4}>
                    <RecipeCard recipe={recipe} key={recipe.id} />
                </Grid>
            )}
        </Grid>
    );
}
