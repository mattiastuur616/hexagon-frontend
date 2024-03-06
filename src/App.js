import { Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage';
import LibraryPage from './components/pages/LibraryPage';
import BookPage from './containers/bookPage/BookPage';
import PurchasePage from './components/pages/PurchasePage';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='library' element={<LibraryPage />} />
      <Route path='store' element={<PurchasePage />} />
      <Route path='book' element={<BookPage />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
