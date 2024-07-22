import Select from "react-select";
import React, { useState } from "react";

const CustomSelect = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
            <Select
                value={selectedOption}
                onChange={(selectedOption) => {
                    setSelectedOption(selectedOption);
                    if (onChange) {
                        onChange(selectedOption);
                    }
                }}
                options={options}
            />
        </div>
    );
}

export default CustomSelect;
