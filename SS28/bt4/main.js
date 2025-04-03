let rectangle = {
    with:10,
    height:5,
    getArea: function (){
        return this.with * this.height;

    }
};
console.log("Diện tích hình chữ nhật là:", rectangle.getArea());