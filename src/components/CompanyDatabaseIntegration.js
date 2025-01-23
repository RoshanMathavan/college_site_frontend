import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDatabaseIntegration = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('/api/company-database');
                setCompanies(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const handleUpdateCompany = async (companyId, updatedData) => {
        try {
            await axios.put(`/api/company-database/${companyId}`, updatedData);
            setCompanies(companies.map(company => (company._id === companyId ? { ...company, ...updatedData } : company)));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Company Database Integration</h2>
            <ul>
                {companies.map(company => (
                    <li key={company._id}>
                        <h3>{company.name}</h3>
                        <p>{company.description}</p>
                        {/* Add functionality to update company details */}
                        <button onClick={() => handleUpdateCompany(company._id, { /* updated data */ })}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyDatabaseIntegration;