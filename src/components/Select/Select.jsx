import { useState } from 'react';


import React from 'react';
import ReactSelect from 'react-select';

const options = [
    { value: 'Show all', label: 'Show all' },
    { value: 'Sell', label: 'Sell' },
    { value: 'Free', label: 'Free' },
    { value: 'Lost', label: 'Lost' },
    { value: 'Found', label: 'Found' },
];


const CustomSelect = () => {
    
    const [currentCategory, setCurrentCategory] = useState(options[0].value);

    const getValue = (value) => {
        return currentCategory ? options.find(option => option.value === currentCategory) : null
    }

    const onChange = (newValue) => {
        setCurrentCategory(newValue.value);

    }
    
    return (
        <div className='select'>
            <ReactSelect value={getValue()} 
            onChange={onChange}
            options={options} 
            isSearchable={true}
            placeholder="Category"
            autoFocus={true}
            />
        </div>
    );
};

export default CustomSelect;
