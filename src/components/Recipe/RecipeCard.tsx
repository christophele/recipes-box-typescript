import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    IconButton,
    Typography,
    CardActions,
    Button
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDispatch} from 'react-redux';
import { addFavoriteRecipe } from '../../redux/features/recipe/recipeSlice';

export default function RecipeCard(props:any) {
    const dispatch = useDispatch();

    const addToFavorite = (recipe:any) => {
        console.log(recipe, 'recipppeee')
        dispatch(addFavoriteRecipe(recipe));
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={props.recipe.title}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.recipe.image}
                alt={props.recipe.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => addToFavorite(props.recipe)}>
                    Add to favorite
                </Button>
            </CardActions>
        </Card>
    )
}
