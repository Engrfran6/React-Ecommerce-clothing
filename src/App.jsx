import './App.css';
import {HomePage} from './pages/homepage/home.component';
import {Routes, Route, Link} from 'react-router-dom';
import Shop from './pages/shops/shops';

export default function App() {
  return (
    <>
      <div>
        <h2>
          <Link to="/">HOME</Link> <Link to="/collection">COLLECTIONS</Link>
        </h2>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/collection" element={<Shop />} />
      </Routes>
    </>
  );
}
