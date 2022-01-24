import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeRecipe from './components/HomeRecipe/HomeRecipe';
import App from './App';
import {
    Box,
    Container,
  } from '@mui/material';

export default function Routing() {
    return (
        <Box sx={{ mt: 7, mb: 12 }}>
            <Container>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/recipes" exact component={HomeRecipe} />
                    </Switch>
                </Router>
            </Container>
        </Box>
    );
}
