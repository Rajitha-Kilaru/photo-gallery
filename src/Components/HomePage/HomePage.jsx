import React from 'react'
import CompanyLogo from '../../Images/CompanyLogo.jpg'
import { Link } from 'react-router-dom'
import '../../Styles/HomePage.css'
import SliderPage from './SliderPage';
import ImagesGrid from './ImagesGrid';
import Footer from './Footer';


function HomePage() {
    return (
        <>
            <div className='main'>
                <nav className='navbar'>
                    <div className='logo'>
                        <img src={CompanyLogo} alt="Not Found" />
                    </div>
                    <div className='links'>
                        <button className='loginbtn'><Link className='loginlink' to="/loginPage">Login</Link></button>
                        <button className='registerbtn'><Link className='registerlink' to="/register">Register</Link></button>
                    </div>
                </nav>
            </div>
            <div className='slider'>
                <SliderPage />
            </div>
            <div className='images_gallery'>
                <ImagesGrid />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>
    );
}
export default HomePage