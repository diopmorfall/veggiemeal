import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import searchMenuIcon from "../assets/icons/search_icon.svg";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    };

    return (
        <form className="w-2/3 h-10 flex flex-row justify-between items-center p-4 border-2 border-black rounded-3xl bg-transparent md:w-1/2 nav-searchbar"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                className="lowercase outline-none bg-transparent italic"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={true}
                placeholder='Search recipes...'
            />
            <button type="submit" className="p-2 rounded-full">
                <img src={searchMenuIcon} className='w-6 ' />
            </button>
        </form>
    )
}
