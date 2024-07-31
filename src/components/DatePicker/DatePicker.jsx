
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { useEffect, useRef } from 'react';
import CalendarIcon from '../../images/svg/calendar.svg';
import "../../styles/DatePicker.scss"

const DatePicker = ({ value, onChange, name, placeholder, error, success }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const datepicker = new AirDatepicker(inputRef.current, {
      selectedDates: value !== '00.00.0000' ? [new Date(value)] : [],
      isMobile: true,
      autoClose: true,
      locale: localeEn,
      dateFormat: 'MM.dd.yyyy',
      classes: 'date-airpicker-calendar',
      onSelect: ({ formattedDate }) => {
        onChange(formattedDate);
      },
    });

    if (value === '00.00.0000' || !value) {
      inputRef.current.value = '00.00.0000';
    }

    return () => {
      datepicker.destroy();
    };
  }, [value, onChange]);

  const inputClassName = `date-airpicker-input ${error === 'true' && 'error'} ${
    success === 'true' && 'success'
  }`;

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="date-airpicker-wrapper">
      <input
        ref={inputRef}
        placeholder={placeholder}
        name={name}
        className={inputClassName}
        defaultValue={value === '00.00.0000' ? '' : value}
      />
      <img src={CalendarIcon} alt="Calendar" className="calendar-icon" onClick={handleIconClick} />
    </div>
  );
};

export default DatePicker;
