import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Result from './result/Result';
import Book from './book/Book';



import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  <ul>
    <li><Link to="/">Main</Link></li>
    <li><Link to="/book">Book</Link></li>
  </ul>
  return (
    <div className="App">
        <Header />
        <Result />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/book" component={Book} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
