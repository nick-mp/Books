import './Result.css';
import {selectValue} from '../store/booksSlice';
import { useSelector } from 'react-redux';

export default function Result() {
    let booksOut = useSelector(selectValue)
    let numResult = 0;
    for (let i in booksOut.payload) {
        numResult++
    }
    console.log(numResult)
    return (
        <div className="result">
            <h4>Found {numResult} results</h4>
        </div>
    );
};
