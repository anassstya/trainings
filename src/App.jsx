import React, { useState } from "react";
import './App.css';
import EntryForm from "./EntryForm";
import EntryTable from "./EntryTable";

export default function App() {
    const [formData, setData] = useState({ date: '', km: '' });
    const [entries, setEntries] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.date || !formData.km) return;

        const newEntries = [...entries];
        const existingIndex = newEntries.findIndex(entry => entry.date === formData.date);

        if (existingIndex !== -1) {
            newEntries[existingIndex].km += parseFloat(formData.km);
        } else {
            newEntries.push({ date: formData.date, km: parseFloat(formData.km) });
            newEntries.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
        }

        setEntries(newEntries);
        setData({ date: '', km: '' });
    };

    const handleDelete = (index) => {
        setEntries(entries.filter((_, i) => i !== index));
    };

    return (
        <div className="mainContainer">
            <EntryForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <EntryTable
                entries={entries}
                handleDelete={handleDelete}
            />
        </div>
    );
}
