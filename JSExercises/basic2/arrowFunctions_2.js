const cameras = {
    price:600,
    weight: 2000,
    mydesc: function(){
        return `This canon is of ${this.price}`;
    }
};

console.log(cameras.mydesc());