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
        <form className="w-1/2 flex flex-row justify-between items-center p-3 border-2 rounded-md bg-transparent" onSubmit={handleSearch}>
            <input
                type="text"
                className="lowercase"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={true}
            />
            <button type="submit" className="p-2 rounded-full">
                <img src={searchMenuIcon} className='w-8 ' />
            </button>
        </form>
    )
}
