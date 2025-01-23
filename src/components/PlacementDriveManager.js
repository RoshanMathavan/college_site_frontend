import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlacementDriveManager = () => {
    const [drives, setDrives] = useState([]);
    const [driveDetails, setDriveDetails] = useState({ title: '', date: '', company: '' });
    const [editingDriveId, setEditingDriveId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDrives();
    }, []);

    const fetchDrives = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('/api/placement-drives');
            setDrives(response.data);
        } catch (err) {
            setError('Failed to fetch placement drives.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDriveDetails({ ...driveDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (editingDriveId) {
                await axios.put(`/api/placement-drives/${editingDriveId}`, driveDetails);
            } else {
                await axios.post('/api/placement-drives', driveDetails);
            }
            setDriveDetails({ title: '', date: '', company: '' });
            setEditingDriveId(null);
            fetchDrives();
        } catch (err) {
            setError('Failed to save placement drive.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (drive) => {
        setDriveDetails({ title: drive.title, date: drive.date, company: drive.company });
        setEditingDriveId(drive._id);
    };

    const handleDelete = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(`/api/placement-drives/${id}`);
            fetchDrives();
        } catch (err) {
            setError('Failed to delete placement drive.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Placement Drive Manager</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Drive Title:
                    <input
                        type="text"
                        name="title"
                        value={driveDetails.title}
                        onChange={handleInputChange}
                        placeholder="Drive Title"
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={driveDetails.date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="company"
                        value={driveDetails.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        required
                    />
                </label>
                <button type="submit" disabled={loading}>
                    {editingDriveId ? 'Update Drive' : 'Create Drive'}
                </button>
            </form>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {drives.map((drive) => (
                        <li key={drive._id}>
                            {drive.title} - {new Date(drive.date).toLocaleDateString()} - {drive.company}
                            <button onClick={() => handleEdit(drive)}>Edit</button>
                            <button onClick={() => handleDelete(drive._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PlacementDriveManager;