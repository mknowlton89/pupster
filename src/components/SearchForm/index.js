import React from 'react'
import './styles.css';

export function SearchForm() {
    return (
        <div className="search">
            <h1>Search By Breed</h1>
            <form>
                <input
                    className="search-bar"
                    type="text"
                    name="input-text"
                    placeholder="Enter the name of a breed to search"
                />
                <input
                    type="button"
                    name="searchBtn"
                    value="Search"
                />
            </form>
        </div>
    )
}