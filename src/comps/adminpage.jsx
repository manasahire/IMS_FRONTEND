import React from 'react';
import axios from 'axios';
import { FaFileExcel, FaPhone, FaEnvelope, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const AdminPage = () => {
  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get('http://localhost:8081/admission/getAll', {
        responseType: 'blob', // Ensure response type is blob for binary data
      });

      // Create a temporary URL for the blob data
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };
  
  return (
    <div>
    <h1>Admin Page</h1>
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-3">
          <button type="button" className="btn btn-info card-body" onClick={handleDownloadExcel} style={{ height: '150px', fontSize: '1.5rem' }}>
            <FaFileExcel style={{ fontSize: '2rem' }} /> Download Excel for admission
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <button type="button" className="btn btn-info card-body" onClick={handleDownloadExcel} style={{ height: '150px', fontSize: '1.5rem' }}>
            <FaPhone style={{ fontSize: '2rem' }} /> Download Excel for contactUs
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <button type="button" className="btn btn-info card-body" onClick={handleDownloadExcel} style={{ height: '150px', fontSize: '1.5rem' }}>
            <FaEnvelope style={{ fontSize: '2rem' }} /> Download Excel for feedback
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <button type="button" className="btn btn-info card-body" onClick={handleDownloadExcel} style={{ height: '150px', fontSize: '1.5rem' }}>
            <FaUserPlus style={{ fontSize: '2rem' }} /> Download Excel for signUp
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <button type="button" className="btn btn-info card-body" onClick={handleDownloadExcel} style={{ height: '150px', fontSize: '1.5rem' }}>
            <FaSignInAlt style={{ fontSize: '2rem' }} /> Download Excel for login
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminPage;
