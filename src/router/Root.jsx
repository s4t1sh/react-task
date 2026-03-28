import { Outlet } from 'react-router-dom';
import Header from '../universal/Header';
import Footer from '../universal/Footer';

const RootLayout = () => {
  return (
    <>
        <Header />
        <main className='px-24'>
            <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default RootLayout;