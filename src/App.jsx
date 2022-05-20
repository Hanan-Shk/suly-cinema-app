import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './views/Home';
import MoviePage from './views/Movie';
import TvShowPage from './views/TvShow';
import Error404 from './views/404';
import DetailPage from './views/Detail';
import SearchPage from './views/Search';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/tvshows" element={<TvShowPage />} />
                <Route path="/:type/:id" element={<DetailPage />} />
                <Route path="/search/:query" element={<SearchPage />} />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}
