const cars = [
    {
        model: "vitara",
        brand: "maruti",
        color: "white"
    },
    {
        model: "scorpio n",
        brand: "mahindra",
        color: "black"
    },
    {
        model: "thar",
        brand: "mahindra",
        color: "white"
    },
    {
        model: "creta",
        brand: "hyundai",
        color: "black"
    },
    {
        model: "i20",
        brand: "hyundai",
        color: "red"
    },
]

cars.map((value, key) => {
    console.log("Car " + (key + 1) + " = " + value.brand + value.model + value.color);
})