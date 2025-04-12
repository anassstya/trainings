import React from "react";
import './App.css';

function EntryForm({ formData, handleChange, handleSubmit }) {
    return (
        <form className="mainForm" onSubmit={handleSubmit}>
            <div className="mainFormItem">
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input
                    onChange={handleChange}
                    value={formData.date}
                    className="mainInput"
                    type="date"
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
    );
}

export default EntryForm;
