import axios from 'axios';
import XLSX from 'xlsx';

const handleDownloadExcel = async () => {
  try {
    const response = await axios.get('http://localhost:8081/admission/getAll');

    const workbook = XLSX.utils.book_new();
    const sheetName = 'Data';

    // Convert the received data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(response.data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Convert the workbook to a binary Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Convert the binary data to a Blob
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary URL for the Blob data
    const url = window.URL.createObjectURL(excelBlob);

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.xlsx');
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading Excel:', error);
  }
};
