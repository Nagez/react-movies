import CreateActor from "./Actors/CreateActor";
import IndexActors from "./Actors/IndexActors";
import CreateGenre from "./Genres/CreateGenres";

import EditActor from "./Genres/EditGenre";
import EditGenre from "./Genres/EditGenre";
import IndexGenres from "./Genres/IndexGenres";

import CreateMovieTheater from "./MovieTheaters/CreateMovieTheater";
import EditMovieTheater from "./MovieTheaters/EditMovieTheater";
import IndexMovieTheater from "./MovieTheaters/IndexMovieTheater";

import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";

import landingPage from "./movies/LandingPage";
import RedirectToLandingPage from "./utility/RedirectToLandingPage";
import { Redirect } from "react-router-dom";


const routes = [
    {path: '/genres', component: IndexGenres, exact: true },
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre}, //: means parameters. d+ means parameter must be a number
    
    {path: '/actors', component: IndexActors, exact: true },
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit:id(\\d+)', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheater, exact: true },
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/filter', component: FilterMovies },
    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit:id(\\d+)', component: EditMovie},

    {path: '/', component: landingPage, exact: true },
    {path: '/*', component: RedirectToLandingPage} //deafult routing (for non exixting routes) 

];

export default routes;