import './Result.css';
import {selectResult} from '../store/resultSlice';
import { useSelector } from 'react-redux';

export default function Result() {
    const numResult = useSelector(selectResult)
    return (
        <div className="result">
            <h4>Found {numResult.payload} results</h4>
        </div>
    );
};
