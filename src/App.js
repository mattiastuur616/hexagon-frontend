//import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import LibraryPage from './components/LibraryPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='library' element={<LibraryPage />} />
    </Routes>
  );
}

export default App;
