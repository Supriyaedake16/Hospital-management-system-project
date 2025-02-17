import React, { useState, useEffect } from "react";

const PatientList = () => {
  const [patients, setPatients] = useState([]); // Holds the patient data
  const [loading, setLoading] = useState(true); // Indicates loading status

  // Fetch data from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/patients");
        const data = await response.json();
        console.log("API response:", data); // Debug: Check the fetched data
        setPatients(data); // Set the state with fetched data
        setLoading(false); // Update loading state
      } catch (error) {
        console.error("Error fetching patients:", error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Debugging the state
  useEffect(() => {
    console.log("Patients in state:", patients); // Check state updates
  }, [patients]);

  if (loading) {
    return <p>Loading patients...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Patient List</h1>
        <button className="btn btn-success px-4 py-2">
          <i className="fas fa-user-plus me-2"></i>Add Patient
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover shadow rounded">
          <thead className="table-dark">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Diagnosis</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="p-3">{patient.id}</td>
                  <td className="p-3">{patient.name}</td>
                  <td className="p-3">{patient.diagnosis}</td>
                  <td className="p-3">
                    <button className="btn btn-sm btn-info me-2 px-3 py-2">
                      <i className="bi bi-pencil-square"></i>Edit
                    </button>
                    <button className="btn btn-sm btn-danger px-3 py-2">
                      <i className="bi bi-trash"></i>Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-3">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
