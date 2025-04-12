import React from "react";
import './App.css';

function EntryTable({ entries, handleDelete }) {
    return (
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
    );
}

export default EntryTable;
