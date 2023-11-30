import React, { useState } from 'react';
import axios from 'axios';

function CountrySearch() {
    const [country, setCountry] = useState('');
    const [countryInfo, setCountryInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCountryData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/country/${country}`);
            setCountryInfo(response.data);
        } catch (err) {
            setError('Error fetching data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            <button onClick={fetchCountryData}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {countryInfo && <div>{/* Render country information here */}</div>}
        </div>
    );
}

export default CountrySearch;
