import logoImg from '../assets/logo.png';
import './style.css'
import {Link, Routes, Route} from 'react-router-dom'
import BookingPage from '../../components/Booking/BookingPage'
import Homepage from "../Homepage"
import ConfirmedBooking from "../Booking/ConfirmedBooking"

const Nav = () => {
    return (
        // <nav className='nav'>
        //     <ul>
        //         <li><img src={logoImg} alt="logo" height="20px"/></li>
        //         <li><a href='/'>Home</a></li>
        //         <li>About</li>
        //         <li>Menu</li>
        //         <li><a href='/reservation'>Reservation</a></li>
        //         <li>Order Online</li>
        //     </ul>
        // </nav>
        <div>
            <nav>
                <ul>
                    <li><Link><img src={logoImg} alt="Little Lemon logo" height="20px"/></Link></li>
                    <li><Link to="/" className='nav-item'>Home</Link></li>
                    <li><Link to="/about" className='nav-item'>About</Link></li>
                    <li><Link to="/menu" className='nav-item'>Menu</Link></li>
                    <li><Link to="/reservation" className='nav-item'>Reservation</Link></li>
                    <li><Link to="/ordering" className='nav-item'>Order Online</Link></li>
                </ul>
            </nav>
            <Routes>
            <Route index element={<Homepage />} />
            <Route path="about" element={<Homepage />} />
            <Route path="reservation" element={<BookingPage />} />
            <Route path="confirmation" element={<ConfirmedBooking/>}/>
        </Routes>
        </div>
    )
}

export default Nav;