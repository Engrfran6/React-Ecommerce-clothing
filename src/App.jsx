import './App.css';
import {HomePage} from './pages/homepage/home.component';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}
