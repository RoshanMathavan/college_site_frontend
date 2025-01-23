import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyCoordinator.css';

const CompanyCoordinator = () => {
    const [companies, setCompanies] = useState([]);
    const [newCompany, setNewCompany] = useState({ name: '', contact: '', email: '' });

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await axios.get('/api/companies');
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCompany({ ...newCompany, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/companies', newCompany);
            fetchCompanies();
            setNewCompany({ name: '', contact: '', email: '' });
        } catch (error) {
            console.error('Error adding company:', error);
        }
    };

    return (
        <div className="company-coordinator">
            <h2>Company Coordinator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={newCompany.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Person"
                    value={newCompany.contact}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newCompany.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Company</button>
            </form>
            <h3>Company List</h3>
            <ul>
                {companies.map((company) => (
                    <li key={company._id}>
                        {company.name} - {company.contact} - {company.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyCoordinator;
