import React, { useState } from "react";
import './App.css';

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
            <form className="mainForm" onSubmit={handleSubmit}>
                <div className="mainFormItem">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input
                        onChange={handleChange}
                        value={formData.date}
                        className="mainInput"
                        type="text"
                        name="date"
                        placeholder="21.07.2019"
                        required
                    />
                </div>
                <div className="mainFormItem">
                    <label htmlFor="km">Пройдено км</label>
                    <input
                        onChange={handleChange}
                        value={formData.km}
                        className="mainInput"
                        type="number"
                        name="km"
                        placeholder="10.5"
                        required
                    />
                </div>
                <button type="submit" className="mainBtn">Ок</button>
            </form>

            <table className="mainTable">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено км</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.date}</td>
                        <td>{entry.km.toFixed(1)}</td>
                        <td>
                            <button onClick={() => handleDelete(index)} className="deleteBtn">x</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
