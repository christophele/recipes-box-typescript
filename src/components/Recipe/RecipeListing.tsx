// import {useAppSelector} from '../../app/hooks';
import {
    Grid
} from '@mui/material';
import RecipeCard from './RecipeCard';
import {
    IRecipeItem,
    IRecipeList
} from '../../data/models/recipe.model';


export default function RecipeListing({recipes}: IRecipeList) {

    return (
        <Grid container spacing={10}>
            {
                recipes && recipes.map((recipe:IRecipeItem) =>
                <Grid item xs={5} md={5} lg={4}>
                    <RecipeCard
                        recipe={recipe}
                        key={recipe.id}
                    />
                </Grid>
            )}
        </Grid>
    );
}
