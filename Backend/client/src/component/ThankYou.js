import React, { useEffect, useState } from 'react';

const ThankYou = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/form/data');
                const data = await response.json();
                setSubmissions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Submitted Data</h2>
            <ul>
                {submissions.map((submission, index) => (
                    <li key={index}>
                        <p>User Email: {submission.userEmail}</p>
                        <p>Trainer Name: {submission.trainerName}</p>
                        <p>Trainer Email: {submission.trainerEmail}</p>
                        <p>Message: {submission.userMessage}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThankYou;
