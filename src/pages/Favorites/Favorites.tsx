import RecipeListing from "../../components/Recipe/RecipeListing";
import { useSelector } from 'react-redux';
import { getAllFavoritesRecipes } from "../../features/recipe/recipeSlice";

export default function Favorites() {
    const favoritesRecipes = useSelector(getAllFavoritesRecipes);

    return (
        <>
            {
                favoritesRecipes.length === 0 &&
                    <div>
                        No favorites recipes 
                    </div>
            }
            {
                (favoritesRecipes.length > 0) && <div>
                    <RecipeListing
                        recipes={favoritesRecipes}
                    />
                </div>
            }
        </>
        
    )
}
