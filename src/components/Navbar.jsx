import { Link } from 'solid-app-router';

function Navbar() {
    return (
        <div class='bg-cyan-700'>
            <nav class='p-4 text-amber-300'>
                <Link href='' class='mr-4 text-lg'>
                    Home
                </Link>
                <Link href='/projects' class='mr-4 text-lg'>
                    Projects
                </Link>
                <a href=''></a>
            </nav>
        </div>
    );
}

export default Navbar;
