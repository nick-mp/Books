import './Header.css';
import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/booksSlice';


export default function Header() {
    const inputSearch = useRef('');
    const orderBy = useRef();
    const dispatch = useDispatch();
    let orderByOut = 'relevance'


    function fetchHandler(event) {
        event.preventDefault();
        console.log('work');
        if (inputSearch.current.value.length === 0) alert('Write something!')

         fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputSearch.current.value}&orderBy=${orderByOut}`)
        .then((data) => data.text())
        .then(data => {
            const {items} = JSON.parse(data);
            const books = items.map(({volumeInfo: item, id, selfLink}) => {return {item, id, selfLink}});
            dispatch(add(books))
        });
    }

    function sortingHandler () {
        if (orderBy.current.options.selectedIndex === 1) orderByOut = 'newest';
        else   orderByOut = 'relevance';
    }

    return (
        <div className="container">
            <div className="header">
                <form action="">
                    <h2 className="header__title">Search for books</h2>
                    <input type="text" defaultValue = "dogs" className="header__search" placeholder="some title" ref={inputSearch}/>
                    <button type="submit" className="header__btn-search" onClick={fetchHandler}>Search</button>    
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
                    <select className="header__choice" ref={orderBy} onChange={sortingHandler} name="categories" id="2">
                        <option value="">relevance</option>
                        <option value="">newest</option>
                    </select>
                    </div>
                </form>
            </div>
        </div>
    )
};
