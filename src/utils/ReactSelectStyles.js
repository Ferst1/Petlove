
const ReactSelectStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #f6b83d',
      borderRadius: '30px',
      fontSize: '12px',
      height: '42px',
      maxWidth: '432px',
      marginRight: '16px',
      boxShadow: state.isFocused ? '0 0 0 1px #f6b83d' : 'none',
      display: 'flex',
      alignItems: 'center'
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9b9b9b',
      textAlign: 'center',
      flex: 1
    }),
    menu: (base) => ({
      ...base,
      fontFamily: 'var(--font-family)',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '125%',
      letterSpacing: '-0.03em',
      color: 'rgba(38, 38, 38, 0.6)',
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#f6b83d' : isFocused ? 'rgba(246, 184, 61, 0.1)' : null,
      color: isSelected ? '#fff' : 'rgba(38, 38, 38, 0.6)',
      fontFamily: 'var(--font-family)',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '125%',
      letterSpacing: '-0.03em',
      cursor: 'pointer'
    }),
  };
  
  export default ReactSelectStyles;
  