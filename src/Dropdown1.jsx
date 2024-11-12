import './Dropdown1.css'
import React, { useState } from 'react';

function Dropdown1 ({ onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Select option')
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        onChange(option); 
        setIsOpen(false);
    };


    return(
        <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
            {selectedValue} ▼
        </button>
        {isOpen && (
            <ul className="dropdown-list">
                <li onClick={() => handleOptionClick('Promo Code')}>Promo Code</li>
                <li onClick={() => handleOptionClick('Coupon')}>Coupon</li>
            </ul>
        )}
    </div>
    );
}

export default Dropdown1;
