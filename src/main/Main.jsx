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
            {booksOut.payload.map(item => (
                <div className="main__card">
                    <img src={item.imageLinks.smallThumbnail} alt="" />                    
                    <p>{item.title}</p>
                    <p>{item.categories}</p>
                    <p>{item.authors}</p>
                </div>
            ))}
        </div> 
    );
};

 
//                <img className="main__card-img" src="#" alt="icon book" /> {/* Переменная превью книги */}
//                <p>Category</p> {/* Тут будет переменная категории книг */}
//                <p>Node.js</p> {/* Переменная названия книги */}
//                <p>Автор книги</p> {/* Переменная автор */} 

             