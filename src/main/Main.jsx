import './Main.css';
import { useSelector } from 'react-redux';
import {selectValue} from '../store/booksSlice';
import {selectLoad} from '../store/loadingSlice';
import Loader from 'react-loader-spinner';

export default function Main() {
    const loading = useSelector(selectLoad)
    let booksOut = useSelector(selectValue)

    if (booksOut.length === 0) 
        return <div>Начните поиск</div>
    else {
        if(loading === true) {return (
            <div className="main__waiting">
                <Loader type="Grid" color="blue" height={100} width={100}/>
            </div>)}
        else return (
            <div className="main__container">
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
                <button className="main__btn-more" onClick = {() => {console.log('hi')}}>Load more</button>
            </div>
            
    );}
    
};            