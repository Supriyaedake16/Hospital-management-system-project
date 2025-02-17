// import React from 'react';

// const Header= () => {
//     return (
//         <header className="bg-dark text-white text-center py-3">
//             <h1>Hospital Management System</h1>
//         </header>
//     );
// };

// export default Header;
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/patient-list">Patient List</Link></li>
                <li><Link to="/appointment-list">Appointment List</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
