import * as XLSX from 'xlsx'; // Corrected import
import axios from 'axios';


const handleDownloadadminExcel = async () => {
  try {
    const response = await axios.get('http://localhost:8081/admission/getAll');

    // Ensure response.data is an array of objects
    if (!Array.isArray(response.data) || response.data.length === 0) {
      throw new Error('No data received from the server.');
    }

    const workbook = XLSX.utils.book_new();
    const sheetName = 'Admission Data'; // Set the sheet name

    // Convert the received data to a tabular format
    const dataForExcel = response.data.map(item => ({
      Admision_id : item.admissionId,
      Full_Name: item.fullName,
      Email_Id: item.email,
      Mobile_Number: item.mobile,
      Class_Name: item.className,
      Course_Name: item.courseName,
      Address: item.address,
      Payment_Method: item.paymentMethod,
      // Add more fields as needed
    }));

    // Convert the tabular data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().slice(0, 10);

    // Set the file name including today's date and "admission data"
    const fileName = `${sheetName}_${today}.xlsx`; // Set the file name

    // Convert the workbook to a binary Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Convert the binary data to a Blob
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary URL for the Blob data
    const url = window.URL.createObjectURL(excelBlob);

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading Excel:', error);
  }
};


export default handleDownloadadminExcel;