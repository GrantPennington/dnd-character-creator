import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CharacterForm = ({ onResult }) => {
    const [formData, setFormData] = useState({
        race: '',
        charClass: '',
        theme: '',
        alignment: '',
        role: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${API_BASE_URL}/characters/generate`, formData);
            onResult(res.data.result);
        } catch (err) {
            alert('Failed to generate character.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        {['race', 'charClass', 'theme', 'alignment', 'role'].map((field) => (
            <div key={field}>
            <label>{field}</label>
            <input name={field} value={formData[field]} onChange={handleChange} required />
            </div>
        ))}
        <button type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate Character'}
        </button>
        </form>
    );
};

export default CharacterForm;