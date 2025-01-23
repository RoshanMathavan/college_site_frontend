import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApplicationTracker.css';

const ApplicationTracker = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('/api/applications');
                setApplications(response.data);
            } catch (error) {
                setError('Error fetching applications.');
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    return (
        <div className="application-tracker">
            <h2>Application Tracker</h2>
            {error && <div className="error">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) => (
                            <tr key={application._id}>
                                <td>{application.studentName}</td>
                                <td>{application.company}</td>
                                <td>{application.status}</td>
                                <td>{application.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ApplicationTracker;
