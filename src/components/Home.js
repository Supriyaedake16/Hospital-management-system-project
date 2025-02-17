// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
    return (
        <div className="container-fluid mx-0 px-0">
            <header>
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{color:"#173885"}} to="/">Medi<span style={{color:"#20c997"}}>Care</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/patient-list">Patient List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/appointment-list">Appointment List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/doctor-list">Doctor List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/billing-system">Billing System</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='p-0'>



                <div className="card-container" style={{backgroundColor:"#ffffff"}}>


                    {/* Text Section */}
                    <div className="text-section">
                        <h1 className="project-title ">Hospital Management System</h1>
                        <p className="project-description">
                            The HMS is a robust solution to streamline hospital workflows and
                            manage patient data efficiently. This project helps manage patients,
                            doctors, appointments, and billing seamlessly.
                        </p>

                        <a href="#learn-button" className="learn-button">Learn More</a>

                    </div>
                    {/* Image Section */}
                    <div className="image-section">
                        <img src="vector.png" alt="HMS Project" className="project-image" />
                    </div>
                </div>


                <section id="summary-section">
    <h2>Hospital Overview</h2>
    <div className="row">
    {/* Patient Summary */}
    <div className="col-md-3">
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
                <img src="patient.jpeg" className="img-icon mb-2" alt="Patients" />
                <h3>Patients</h3>
                <p>Total Patients: 120</p>
                <p>New Patients Today: 5</p>
            </div>
        </div>
    </div>

    {/* Appointments Summary */}
    <div className="col-md-3">
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
                <img src="cal.jpeg" className="img-icon mb-2" alt="Appointments" />
                <h3>Appointments</h3>
                <p>Upcoming: 10</p>
                <p>Pending: 2</p>
            </div>
        </div>
    </div>

    {/* Doctor Summary */}
    <div className="col-md-3">
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
                <img src="doctor.jpeg" className="img-icon mb-2" alt="Doctors" />
                <h3>Doctors</h3>
                <p>Total: 20</p>
                <p>Available Today: 15</p>
            </div>
        </div>
    </div>

    {/* Billing Summary */}
    <div className="col-md-3">
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
                <img src="bill.jpeg" className="img-icon mb-2" alt="Billing" />
                <h3>Billing</h3>
                <p>Outstanding: ₹50,000</p>
                <p>Recent Payments: ₹20,000</p>
            </div>
        </div>
    </div>
</div>


    {/* Action Buttons */}
    <div className="my-4">
        <button className="btn btn-primary m-2">
            <i className="fas fa-user-plus me-2"></i> Add Patient
        </button>
        <button className="btn btn-primary m-2">
            <i className="fas fa-calendar-plus me-2"></i> Schedule Appointment
        </button>
        <button className="btn btn-primary m-2">
            <i className="fas fa-file-invoice me-2"></i> Generate Bill
        </button>
        <button className="btn btn-primary m-2">
            <i className="fas fa-user-md me-2"></i> Add Doctor
        </button>
    </div>
</section>












            </main>
            <footer className="my-4">
                <p>Contact Information: Address | Phone: 123-456-7890 | Email: contact@hospital.com</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </footer>
        </div>
    );
};

export default Home;
