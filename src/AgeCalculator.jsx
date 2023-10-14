import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const birthdateTimestamp = new Date(birthdate).getTime();
        const currentTimestamp = Date.now();
        const ageInMilliseconds = currentTimestamp - birthdateTimestamp;
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        setAge(ageInYears);
    };

    return (
        <div className="age-calculator">
            <h1>Age Calculator</h1>
            <h3>Enter your date of birth</h3>
            <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            /><br />
            <button onClick={calculateAge}>Calculate Age</button>
            {age !== null && <p>Your age is {age} years old.</p>}
        </div>
    );
}

export default AgeCalculator;
