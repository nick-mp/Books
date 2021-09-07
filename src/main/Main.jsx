import './Main.css';
import { useSelector } from 'react-redux';
import {selectValue} from '../store/booksSlice'

export default function Main() {
    let booksOut = useSelector(selectValue) // получаем данные из store
    console.log(booksOut)
    if (booksOut.length === 0) 
        {return (
            <div>

                <p>Поиск не выполнен</p>
            </div>
        );}
    else return (
        <div className="main">
            {booksOut.payload.map(({item, id, selfLink}) => (
                <div className="main__card" key={id}>
                    
                    <img src={item.imageLinks?.smallThumbnail} alt="icon books"/>
                    <p className="main__card-cat">{item.categories}</p>
                    <p className="main__card-title">{item.title}</p>
                    <p className="main__card-authors">{item.authors}</p>
                </div>
            ))}
        </div> 
    );
};

 
//                <img className="main__card-img" src="#" alt="icon book" /> {/* Переменная превью книги */}
//                <p>Category</p> {/* Тут будет переменная категории книг */}
//                <p>Node.js</p> {/* Переменная названия книги */}
//                <p>Автор книги</p> {/* Переменная автор */} 

             