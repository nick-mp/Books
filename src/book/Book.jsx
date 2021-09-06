import './Book.css';
//import { useSelector } from 'react-redux';
//import {selectValue} from '../store/booksSlice'

export default function Book() {
    //const booksOut = useSelector(selectValue) // получаем данные из store

    return (
        <>
        
            <span>Назад</span>
            <div className="book">
                <div className="book__img">
                    <img src="" className="book__depicture" alt="Обложка книги" />
                </div>
                <div className="book__description">
                    <p>Category</p> {/* переменная из отбора книг */}
                    <h3>Название книги</h3> {/* переменная */}
                    <p>Автор книги</p> {/* переменная */}
                    <div className="book__exposition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat iste aut modi, rerum laborum, totam sequi, repellat hic explicabo perspiciatis error voluptatibus tempore. Veniam eum non iusto aut temporibus.</div>
                </div>
            </div>
        </>
    );
};
