function formatString(input: string, toUpper?: boolean): string{

    if(toUpper === true ){
        
        return input.toUpperCase();
    }
    else if(toUpper === false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }

    return "";
}

formatString("Hello", true);





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    const output = items.filter(item => item.rating > 4)
    return output;

}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

filterByRating(books);




function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((x, y) => x.concat(y))
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}


class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

myCar.getInfo();
myCar.getModel();




function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length;
    }
    else{
        return value * 2;
    }
}

processValue("Hello");
processValue(10);





interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 9) {
        return null;
    }

    return products.reduce((maxProduct, currentProduct) => {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    });
}


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }

    return "Weekday"
}

getDayType(Day.Monday);
getDayType(Day.Sunday);




async function squareAsync(n: number): Promise<number>{

    return new Promise((response, reject) => {
        setTimeout(() => {
            if(n>0){
                response(n*n);
            }
            else{
                reject("Negative number not allowed");
            }
        })
    })
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);


