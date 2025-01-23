import React, { useState, useEffect } from 'react';
import './InterviewScheduler.css';

const InterviewScheduler = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');

    useEffect(() => {
        // Fetch students data from an API or other source
        // Example: setStudents([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
    }, []);

    const handleScheduleInterview = () => {
        if (!selectedStudent || !date || !time) {
            alert('Please select a student, date, and time.');
            return;
        }
        console.log(`Interview scheduled for ${selectedStudent} on ${date} at ${time}`);
    };

    return (
        <div className="interview-scheduler">
            <h2>Interview Scheduler</h2>
            <label>
                Select Student:
                <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                    <option value="" disabled>Select a student</option>
                    {students.map((student) => (
                        <option key={student.id} value={student.name}>{student.name}</option>
                    ))}
                </select>
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <button onClick={handleScheduleInterview}>Schedule Interview</button>
        </div>
    );
};

export default InterviewScheduler;
