import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header'
import HomePage from './components/HomePage'
import MatchingRecipes from './components/MatchingRecipes'
//todo: add API key => import.meta.env.VITE_SPOONACULAR_API

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/search/:query" element={<MatchingRecipes />} />
            </Routes>
        </Router>
    )
}



