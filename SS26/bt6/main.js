function formatDates(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có phần tử nào";
    
    let formattedDates = arr.map(date => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
        
        let [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    }).filter(date => date !== null); 

    return formattedDates;
}

console.log(formatDates(["2006-08-30", "2006-08-22", "2032-08-25"])); 


console.log(formatDates([])); 


console.log(formatDates("abc")); 

console.log(formatDates(["invalid-date", "2025-03-10"])); 

