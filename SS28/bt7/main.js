let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

];
function filterExcellentStudents(students) {
    return students.filter(student => {
        let scores = student.scores;
        let average = (scores.math + scores.english + scores.literature) / 3;
        return average >= 8;
    });
}

let ExcellentStudents = filterExcellentStudents(students);
console.log("Danh sách sinh viên đạt điểm trung bình >=8");
ExcellentStudents.forEach(student => console.log("-" + student.name));
