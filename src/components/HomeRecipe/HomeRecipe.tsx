import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { apiKey } from '../../api/apiKey';
import baseApiUrl from '../../api/baseApiUrl';

import { addRecipes } from '../../features/recipe/recipeSlice';

import RecipeListing from '../Recipe/RecipeListing';



export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await baseApiUrl.get(`complexSearch?apiKey=${apiKey}&number=20`);
            dispatch(addRecipes(response.data.results));
        }
        fetchRecipes();
    }, []);

    return (
        <RecipeListing />
    );
}
