import './Main.css';
import { useSelector } from 'react-redux';
import {selectValue} from '../store/booksSlice';
import {selectLoad} from '../store/loadingSlice';
import Loader from 'react-loader-spinner';
import { useEffect } from 'react';

export default function Main() {
    const loading = useSelector(selectLoad)
    let booksOut = useSelector(selectValue)

    useEffect(() => {
        console.log(loading)
    }, [loading])

    if (booksOut.length === 0) 
        return <div>Начните поиск</div>
    else {
        if(loading == true) {return (
            <div className="main__waiting">
                <Loader type="Grid" color="blue" height={100} width={100}/>
            </div>)}
        else return (
            <div className="main">
                {booksOut.payload.map(({item, id, selfLink}) => (
                    <div className="main__card" key={id}>
                        
                        <img src={item.imageLinks?.smallThumbnail} alt="icon books"/>
                        <p className="main__card-cat">{item.categories}</p>
                        <b className="main__card-title">{item.title}</b>
                        <p className="main__card-authors">{item.authors}</p>
                    </div>
                ))}
            </div> 
            
    );}
    
};            