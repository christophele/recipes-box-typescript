import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    IconButton,
    Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeCard(props:any) {
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
        </Card>
    )
}
