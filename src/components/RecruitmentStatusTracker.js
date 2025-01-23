import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecruitmentStatusTracker = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await axios.get('/api/recruitment-status');
                setStatuses(response.data);
            } catch (error) {
                console.error('Error fetching recruitment statuses:', error);
            }
        };

        fetchStatuses();
    }, []);

    return (
        <div>
            <h2>Recruitment Status Tracker</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Application ID</th>
                        <th>Status</th>
                        <th>Company</th>
                        <th>Interview Date</th>
                    </tr>
                </thead>
                <tbody>
                    {statuses.map((status) => (
                        <tr key={status.applicationId}>
                            <td>{status.studentName}</td>
                            <td>{status.applicationId}</td>
                            <td>{status.status}</td>
                            <td>{status.company}</td>
                            <td>{status.interviewDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecruitmentStatusTracker;