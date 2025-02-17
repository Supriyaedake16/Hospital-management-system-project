import React from 'react';

const AppointmentList = () => {
    const appointments = [
        { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2025-02-10' },
        { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Adams', date: '2025-02-11' },
        { id: 3, patientName: 'David Brown', doctorName: 'Dr. Johnson', date: '2025-02-12' },
        { id: 4, patientName: 'Emily White', doctorName: 'Dr. Carter', date: '2025-02-13' },
    ];

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Appointment List</h2>
                <button className="btn btn-success px-4 py-2">
                    <i className="fas fa-plus me-2"></i>Add Appointment
                </button>
            </div>

            {/* Table Section */}
            <div className="table-responsive">
                <table className="table table-hover shadow rounded">
                    <thead className="table-dark">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Patient Name</th>
                            <th className="p-3">Doctor Name</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td className="p-3">{appointment.id}</td>
                                <td className="p-3">{appointment.patientName}</td>
                                <td className="p-3">{appointment.doctorName}</td>
                                <td className="p-3">{appointment.date}</td>
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

export default AppointmentList;
