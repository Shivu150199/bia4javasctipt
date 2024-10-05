// {}//object literals

// []
// new Array()

// let name = {};
// let newObj = new Object();
// console.log(name);
// console.log(newObj);

// c create
// r read
// u update
// d delete

// name.section = "bi4";
// name.studentName = "Aneesh";
// name.address = "bhopal";
// console.log(name);
// let laptop = "asus";
// let mouseName = "portonics";

// let obj = {
//     "role of student": "developer",
//     name: "Bablu ji",
//     section: "bia4",
//     laptop: "",
//     [mouseName]: true,
// };
// console.log(obj);
// // dot notation
// console.log(obj.name);
// console.log(obj.section);
// console.log(obj["role of student"]); //bracket notation
// console.log(obj["asus"]);
// obj.name = "Aneesh the great hero";
// console.log(obj);
// console.log(obj.laptop);
// obj.laptop = "dell";
// console.log(obj);

// obj["role of student"] = "Backend developer";
// console.log(obj);

// console.log(obj[mouseName]);
// obj[mouseName] = false;
// console.log(obj);

// delete obj.name;
// delete obj[mouseName];
// console.log(obj);
// let obj1 = {
//     "role of student": "developer",
//     name: "Bablu ji",
//     section: "bia4",
//     laptop: "",
//     [mouseName]: true,
// };

// O

// Object.entries() //in array for
// let allKeys = Object.keys(obj);
// console.log(allKeys);
// let allValues = Object.values(obj);
// console.log(allValues);

// let allEntries = Object.entries(obj);
// console.log(allEntries);
// [["name","bablu ji"],[,],[,]]

// forin loop

// for (let i in obj1) {
//     // i=     obj=name of objeect
//     delete obj1[i];
//     // console.log();
// }
// console.log(obj1);

// object refrence and object cloning

// let name = "shubham"; //#300

// let secondName = name; //#400
// console.log(name === secondName);
// console.log(name); //shubham
// console.log(secondName); //shubham

// name = "Yogesh";
// console.log(name); //yogesh
// console.log(secondName); //'shubham'
// console.log(name == secondName);
// let obj1 = {
//     name: "Superman", //#100
//     power: "laser", //#600
// };
// // let obj2={}

// let obj2 = obj1;
// console.log(obj1 == obj2);
// console.log(obj1.name == obj2.name);
// console.log(obj2.name);

// obj1.name = "Homelander";

// obj1.power = "fly";
// console.log(obj1.name); //superman//homelander
// console.log(obj2.name);
// console.log(obj2.power);

// let obj3 = {};

// for (let i in obj1) {
//     obj3[i] = obj1[i];
// }
// console.log(obj3 == obj1);

// let obj1 = {
//     name: "asus",
//     processor: "i7",
//     details: { certification: "evo", price: "78000", generation: 12 },
// };
// console.log(JSON.stringify(obj1));
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj1.details.price = "70000";
// console.log(obj1);
// console.log(obj2);

// let obj2 = {};
// // obj2.name = "lenovo";

// // obj1.name = "shivam";
// // obj1.details.certification = "military grade";
// // console.log(obj1);
// // console.log(obj2);

// for (let i in obj1) {
//     obj2[i] = obj1[i];
// }

// // loop
// obj1.name = "lenov0";
// obj1.details.price = "75000";
// console.log(obj1);
// console.log(obj2);

// JSON =

// JSON.stringyfy()
// JSON.parse()

// let array=[1,2,3,4,6]
// let array2=[34,34,2,6,75,3]

// let newArray=[...array,...array2]
// let a;
// let obj1 = {
//     name: "asus",
//     processor: "i7",
//     details: { certification: "evo", price: "78000", generation: 12 },
//     sayHello: function () {
//         console.log(this.name + this.processor);
//     },
// };
// console.log(obj1.sayHello());
// let obj2 = {
//     owner: "shubham",
// };
// // let obj2 = { ...obj1,...obj1.details};
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// let result = Object.assign(obj1, obj2);
// console.log(result);

// constructor function

// let car = {
//     name: "carname",
//     engine: "enginename",
//     color: "colorname",
// };

// let creta = {
//     name: "creta",
//     engine: "BS6",
//     color: "blue",
// };

// console.log(this.navigator.geolocation());
// console.log(this);

function car(name, engine, color) {
    let obj = {
        name: name,
        engine: engine,
        color: color,
    };
    return obj;
}
console.log(car("thar", "BS6", "Black"));
console.log(car("ENOVA", "BS5", "Green"));

function Car(name, engine, color) {
    this.name = name;
    this.engine = engine;
    this.color = color;
}

function getHumanStage(h, w, i) {
    return {
        height: h,
        weight: w,
        intelligence: i,
    };
}

function GetHumanStage(h, w, i) {
    this.height = h;
    this.weight = w;
    this.intelligence = i;
}

let child = new GetHumanStage("1 foot", "5kg", 2);
console.log(child);
let adult = new GetHumanStage("5 feet", "60 kg", "6");
console.log(adult);
