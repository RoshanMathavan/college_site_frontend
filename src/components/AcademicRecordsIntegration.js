import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AcademicRecordsIntegration.css';

const AcademicRecordsIntegration = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get('/api/academic-records');
                setRecords(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecords();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="academic-records">
            <h2>Academic Records Integration</h2>
            <ul>
                {records.map(record => (
                    <li key={record.id}>
                        {record.studentName}: {record.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AcademicRecordsIntegration;
