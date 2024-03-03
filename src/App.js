import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import LibraryPage from './components/LibraryPage';
import BookPage from './components/bookPage/BookPage';
import PurchasePage from './components/PurchasePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='library' element={<LibraryPage />} />
      <Route path='store' element={<PurchasePage />} />
      <Route path='book' element={<BookPage />} />
    </Routes>
  );
}

export default App;
