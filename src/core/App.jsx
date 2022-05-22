import { lazy } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';

import Navbar from '../components/Navbar';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </>
    );
}

export default App;
