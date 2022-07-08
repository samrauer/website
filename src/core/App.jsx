import { lazy } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import Navbar from '../components/Navbar';

const routes = [
    {
        path: '/',
        component: lazy(() => import('../pages/Home')),
    },
    {
        path: '/projects',
        component: lazy(() => import('../pages/Projects')),
    },
    {
        path: '/aero',
        component: lazy(() => import('../pages/Aero')),
    },
    {
        path: '/*all',
        component: lazy(() => import('../pages/404')),
    },
];

function App() {
    const Routes = useRoutes(routes);
    return (
        <>
            <Navbar />
            <Routes />
        </>
    );
}

export default App;
