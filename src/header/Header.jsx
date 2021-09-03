import './Header.css';
import React from 'react';

export default function Header() {
    return (
        <>
        <div className="container">
            <div className="header">
                <form action="">
                    <h2 className="header__title">Search for books</h2>
                    <label><input type="text" className="header__search" placeholder="JS"/></label>
                    <div>
                    <span className="header__choice-name">Categories</span>
                     <select className="header__choice" name="categories" id="1">
                        <option value="">all</option>
                        <option value="">art</option>
                        <option value="">biography</option>
                        <option value="">computers</option>
                        <option value="">history</option>
                        <option value="">medical</option>
                        <option value="">poetry</option>
                    </select>
                    <span className="header__choice-name">Sorting by</span>
                    <select className="header__choice" name="categories" id="2">
                        <option value="">relevance</option>
                        <option value="">newest</option>
                    </select>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
};
