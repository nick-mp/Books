import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Result from './result/Result';
//import Book from './book/Book';



//import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Result />
        <Main />
        {/* <Book /> */}
    </div>
  );
}

export default App;
