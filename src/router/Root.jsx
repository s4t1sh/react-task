import { Outlet } from 'react-router-dom';
import Header from '../universal/Header';
import Footer from '../universal/Footer';
import MobileNavbar from '../universal/MobileNavbar';

const RootLayout = () => {
  return (
    <>
        <Header />
        <MobileNavbar />
        <main className='px-4 lg:px-24'>
            <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default RootLayout;