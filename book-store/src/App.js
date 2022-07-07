import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom';
import Books  from './components/Book/Books';
import AddBook from './components/AddBook';
import Home from './components/Home';
import Bookdetail from './components/Book/Bookdetail'
import About from "./components/About";
function App() {
  return (
   <>
   
      <header>
        <Header />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/addbook' element={<AddBook />} exact />
        <Route path='/books' element={<Books />} exact />
        <Route path='/books/:id' element={<Bookdetail />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
      </main>
      
    
   </>
  );
}

export default App;
