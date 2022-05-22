import { lazy } from 'solid-js'
import { Routes, Route, Link } from 'solid-app-router';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));

function App() {
  return (<>
    <h2>My website!</h2>
    <nav>
      <Link href=''>Home</Link>
      <Link href='/projects'>Projects</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
  </>);
}

export default App;
