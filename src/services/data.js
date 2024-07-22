
export function formatDate(dateString) {
    
    const date = new Date(dateString);


    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    
    return `${formattedDay}/${formattedMonth}/${year}`;
}


const dateString = "2023-04-07T09:00:46+0000";
const formattedDate = formatDate(dateString);
console.log(formattedDate); 



