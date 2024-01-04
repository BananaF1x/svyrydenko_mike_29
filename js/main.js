class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppines = [];
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }

    static STUFFING_POTATO = {
        price: 15,
        calories: 10,
    }

    static TOPPING_SAUCE = {
        price: 20,
        calories: 5,
    }

    static TOPPING_SPICES = {
        price: 15,
        calories: 0,
    }

    addTopping (topping) {
        this.toppines.push(topping);
    }

    calculateCalories () {
        let arr = this.toppines;
        let caloriesSum = this.size.calories + this.stuffing.calories;
        arr.forEach((item) => caloriesSum += item.calories);
        return caloriesSum;
    }

    calculatePrice () {
        let arr = this.toppines;
        let fullPrice = this.size.price + this.stuffing.price;
        arr.forEach((item) => fullPrice += item.calories);
        return fullPrice;
    }
}

do {
    let hamburgerSize = prompt("what size hamburger do you want ? (big or small)");
    let hamburgerStuffing = prompt("What staffing do you want ? (chese, salad, potato)");
    if(hamburgerSize == "big") {
        hamburgerSize = Hamburger.SIZE_BIG;
    } else {
        hamburgerSize = Hamburger.SIZE_SMALL;
    }
    
    if(hamburgerStuffing == "chese") {
        hamburgerStuffing = Hamburger.STUFFING_CHEESE;
    } else if(hamburgerStuffing == "salad") {
        hamburgerStuffing = Hamburger.STUFFING_SALAD;
    } else {
        hamburgerStuffing = Hamburger.STUFFING_POTATO;
    }

    const hamburger = new Hamburger(hamburgerSize, hamburgerStuffing);
    let chek = true;

    function addToppines() {
        const hamburgerToppines = prompt("What toppines do you want ? (spices, sauce)");
        if(hamburgerToppines == "spices") {
            return hamburger.addTopping(Hamburger.TOPPING_SPICES);
        } else if(hamburgerToppines == "sauce") {
            return hamburger.addTopping(Hamburger.TOPPING_SAUCE);
        }
    }
  
    do {
        switch (prompt(`
            1. Add toppings.
            2. Count calories.
            3. Count price.
            4. Exit.
        `)) {
            case "1" || "Add toppings":
                addToppines();
                break;
            case "2" || "Count calories":
                alert(hamburger.calculateCalories() + " Calories");
                break;
            case "3" || "Count price":
                alert(hamburger.calculatePrice() + " Tughriks");
                break;
            default:
                chek = false;
                break;
        }
    } while (chek);
} while (confirm("Створити нове замовлення ?"));