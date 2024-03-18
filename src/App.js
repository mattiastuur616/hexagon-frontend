import SignUp from './components/pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import BookPage from './containers/bookPage/BookPage';
import LibraryPage from './components/pages/LibraryPage';
import PurchasePage from './components/pages/PurchasePage';
import StripeContainer from './components/payment/StripeContainer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='book' element={<BookPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='store' element={<PurchasePage />} />
      <Route path='library' element={<LibraryPage />} />
      <Route path='payment' element={<StripeContainer />} />
    </Routes>
  );
}

export default App;
