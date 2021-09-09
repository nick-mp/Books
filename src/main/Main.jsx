import React, {useEffect, useState} from 'react';
import './Main.css';
//import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cards } from '../store/CardsSlice';
import {selectValue} from '../store/booksSlice';
import {selectLoad} from '../store/loadingSlice';
import Loader from 'react-loader-spinner';


export default function Main() {
    const loading = useSelector(selectLoad);
    const books = useSelector(selectValue);
    const [booksOut, setBooksOut ] = useState([])
    const dispatch = useDispatch() ;

    useEffect (()=>{
        console.log('main effect')
        setBooksOut(books)
    }, [books])

    function handlerOpenBook(event) {
        event.preventDefault();
        console.log(event)
    }

    function dispatchCart () {
        dispatch(cards(10));
    }
    console.log(loading)

    if (booksOut.length === 0) 
        return <div>Начните поиск</div>
    else return (
        <div className="main__container">
            <div className="main">
                {booksOut.payload.map(({item, id, selfLink}) => (
                    <div className="main__card" key={id} onClick={handlerOpenBook}>
                        <img src={item.imageLinks?.smallThumbnail} alt="icon books"/>
                        <p className="main__card-cat">{item.categories}</p>
                        <b className="main__card-title">{item.title}</b>
                        <p className="main__card-authors">{item.authors}</p>
                    </div>
                ))}
            </div>
            <button className="main__btn-more" onClick = {dispatchCart}>Load more</button>

            <div className={`main__${loading.payload}`}>
                <Loader type="Grid" color="blue" height={100} width={100}/>
            </div>
        </div>
                    
    )
    
};            