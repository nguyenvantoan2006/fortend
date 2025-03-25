for (let i = 0; i < 10; i++) {
    // Tạo màu ngẫu nhiên ở định dạng hex
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(`%cDòng ${i + 1} với màu ${randomColor}`, `color: ${randomColor}; font-size: 16px;`);
}
