// src/components/Doctor.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('/api/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Doctor List</h2>
                <button className="btn btn-success px-4 py-2">
                    <i className="fas fa-plus me-2"></i>Add Doctor
                </button>
            </div>

            {/* Table Section */}
            <div className="table-responsive">
                <table className="table table-hover shadow rounded">
                    <thead className="table-dark">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Specialization</th>
                            <th className="p-3">Contact</th>
                            <th className="p-3">Availability</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.id}>
                                <td className="p-3">{doctor.id}</td>
                                <td className="p-3">{doctor.name}</td>
                                <td className="p-3">{doctor.specialization}</td>
                                <td className="p-3">{doctor.contact}</td>
                                <td className="p-3">{doctor.availability}</td>
                                <td className="p-3">
                                    <button className="btn btn-sm btn-info me-2 px-3 py-2">
                                        <i className="fas fa-edit me-1"></i>Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger px-3 py-2">
                                        <i className="fas fa-trash me-1"></i>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctor;
