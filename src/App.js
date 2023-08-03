import './App.scss';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';

function App() {
  return (
    <>
    <BrowserRouter basename='/sample'>
      <header>
        <nav>
          <Link to ='/'> Home </Link>
          <span></span>
          <Link to ='/product'> Product </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ < Home/> } ></Route>
          <Route path='/product' element={ < Product/> } ></Route>
        </Routes>
      </main>
    </BrowserRouter>

    </>
  );
}

export default App;
