import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Removed BrowserRouter as it's already in the main entry
import './App.css';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup'));

function App() {
  return (
    <>

    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>Signup</Link>

    <Suspense fallback={<p>Loading component...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
