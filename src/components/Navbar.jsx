import { Link } from 'solid-app-router';

function Navbar() {
    return (
        <div class='bg-cyan-700'>
            <nav class='p-4 text-amber-300 '>
                <Link href='' class='mr-4 text-lg hover:text-amber-200 transition-all'>
                    Home
                </Link>
                <Link href='/projects' class='mr-4 text-lg hover:text-amber-200 transition-all'>
                    Projects
                </Link>
                <a href=''></a>
            </nav>
        </div>
    );
}

export default Navbar;
