import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeRecipe from './components/HomeRecipe/HomeRecipe';
import Favorites from './pages/Favorites/Favorites';
import App from './App';
import {
    Box,
    Container,
  } from '@mui/material';

export default function Routing() {
    return (
        <>
            <Router>
                <Header />
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Container>
                        <Switch>
                            <Route path="/" exact component={App} />
                            <Route path="/recipes" exact component={HomeRecipe} />
                            <Route path="/favorites-recipes" exact component={Favorites} />
                        </Switch>
                    </Container>
                </Box>
            </Router>
        </>
    );
}