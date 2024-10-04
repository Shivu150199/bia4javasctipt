// var
// let
// const

// var a
// // a=4
// var a=4
//  a=5
// console.log(a)
// // let b
// // b=5
// let b=5
// b=6
// console.log(b)
// // const c
// // c=6

// const ITEM=6
// c=7
// console.log(c)

// Data types

// primitve //
// non primitive//

// let num=4///#400  8 bytes

// num=4444444

// let name='Bhagwaan'//8bytes #500
// name='bhagwan das mehra'

// let nameList=['bablu','praksh']//8byte

// primitive data type

// number
// let a =10

// let a=10.5

// const num='10'

// let name ='shivam singh gautam'

// let float =1000.555

// let section ='bia 4'

// 3.boolean

// true false
// let num=14>15
// console.log(num)

// let value=true
// let value2=false

// null
//undefined

// let name

// big int

// let a=20
// console.log(200)
// BigInt(a)

// symbol

// non primitve
//Array
// object

// let a=1
// let b='shivam'
// let c=false

// let array=[a,b,c]

// // object

// let bia={
//     a:1,
//     b:2,
//     c:3
// }

// let student1Name='bablu'
// let student1section='bia4'

// let student2Name='Bhagwan'
// let student2section='bia4'

// const id =Symbol('id')

// let babluDetail={name:'bablu',
// [id]:'bia46',
// role:'developer',
// duration:6,
// hobby:['cricket','chess'],
// sect:'hello',
// id:'bia47'

// }
// // babluDetail.sect='bia3'
// console.log(babluDetail[id])

// let bhagwanDetail={student2Name:'bhagwan',
//     student2section:'bia4'
// }

// let studentsArray=[babluDetail,bhagwanDetail]

// symbol

// let a =5
// let b=5

// console.log(a==b)

// let [name]='shivam'

// number
// String
// Boolean
// null
// undefined
// BigInt
// Symbol//

// Array
// object
// function(){

// }

// working on a project
// let container=null;

// let aneesh={
//     name:'aneesh',
//     section:'bia'
// }

// container=aneesh

// let score=undefined

// score=23

// interacttion

// alert
// prompt
// confirm

// alert('hello everyone')
// let age=21

// prompt

// let age=prompt('what is you age',26)
// console.log(age)

// if(age>18){
//     alert('eligible to vote')
// }else{
//     alert('not eligible')
// }

// let d=confirm('you are  a good boy')
// console.log(d)
// confirm

// prompt  to take input
// prompt("what is your name");

// alert('to show message in popup')

// confirm('take input as boolean')

// operators

// math operator

// + operator
// console.log(2+5+7)
// - operator
// console.log(10-5-2)
// * operator
// console.log(2*5)//10
// console.log(5*3*6)//90
// / operator
// console.log(10/2/1)//5

// % operator

// console.log(9%2)//1
// console.log(15%4)//3

// ** operator

// console.log(2**5)//32
// console.log(3**3)//27

// // ++ increment operator

// console.log(5++)

// // -- decrement operator

// console.log(5--)

// postfix and prefix

// let a = 25;

// console.log(++a);
// console.log(--a);

// copmarison operator

{
    /* < lessthan 
> greater
== equality operator
!= not equal 
>= greater than or equal
<= less than or equal
! not 
=== strict equality
!== strict not equliaty */
}

// console.log(2 < 5); //true
// console.log(5 < 2); //true
// console.log(5 <= 2);
// console.log(10 >= 10);
// console.log(5 <= 3);

// console.log(24 === "24"); //

// console.log(13 === "13");

// console.log(0 !== false);

// let a=5
// let b=10
// console.log(a!==b)
// let ='ab'

// logical operator
// || or operator

// &&  and operator

// console.log(12 > 15 || 15 > 12);
// console.log(12 > 15 && 15 > 12);

// let age = 25;

// console.log(age>18||age<18||age==18)
// console.log(age>18&&age<18&&age==18)

// false||true=true
// false||false=false
// true||false=true
// true||true=true

// false&&true=false
// true&&true=true
// true && false=false
// fasle&&false=false

// type conversion and type coercion

// let dob = "1999";
// console.log(false + "10"); //2009//199910//1989
// console.log("5" * "2");

// console.log(false - "10");

// console.log("10" / "2");

// type conversion

// Number()
//parseInt()
// Boolean()
// String()

// let value = "23";

// console.log(Number(value));
// console.log(parseInt(value));
// console.log(Number(false));
// console.log(Number(1));

// console.log(Boolean(""));

// let num = 6776;
// console.log(typeof num);

// console.log(Number("10") + 10);

// template literals

// let name="shivam singh gautam"

// let aboutMe = "my name is shivam singh gautam \n i am from fatehpur";
// console.log(aboutMe);
// let name = `shivam singh gautam
// i am from fatehpur`;
// console.log(name);

// let firstname = "shivam";
// let lastname = "singh";

// let dob = 1999;
// let currentYear = 2024;

// console.log(
//     "my name is " +
//         firstname +
//         " " +
//         lastname +
//         " and i am " +
//         (currentYear - dob) +
//         " years old"
// );
// console.log(
//     `my name is ${firstname} ${lastname} and i am ${
//         currentYear - dob
//     } years old`
// );

// let ameenObject = {
//     name: "aneesh",
//     section: "bia4",
//     address: "Bhopal",
// };

// console.log(
//     `my name is ${ameenObject.name} my section is ${ameenObject.section} and i am from ${ameenObject.address}`
// );

// console.log(
//     "my name is " +
//         ameenObject.name +
//         " my section is " +
//         ameenObject.section +
//         " and i am from " +
//         ameenObject.address
// );

// truthy and falsy value

// falsy

// null
// undefined
// 0
// ''
// NaN

// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean("a"));
// console.log(Boolean(3));

// Statement and expression

// 3 > 4;
// ("shivam");
// 3;

// if (3 < 4) {
//     let name = "shivam";
// } else {
//     console.log("singh");
// }

// for(let i=0)

// operator precedence

// conditional statement
// let age = prompt("what  is your age ?");

// if (age > 18) {
//     alert("eligible");
// } else {
//     alert("not eligible");
// }

// let mark = prompt("student marks"); //37

// if (mark >= 60 && mark <= 100) {
//     console.log("first");
// } else if (mark < 60 && mark >= 45) {
//     console.log("second");
// } else if (mark >= 33 && mark < 45) {
//     console.log("third");
// } else if (mark >= 0 && mark < 33) {
//     console.log("fail");
// } else {
//     console.log("provide valid marks");
// }

// let num=13

// if(num>10){
//     console.log('good')
// }
// else{
//     console.log('bad')
// }

// if(num<10){
//     console.log('bad')
// }

// teranary operator

// if (13 > 12) {
//     console.log("fine");
// } else {
//     console.log("not fine");
// }

// condition?action when codition is true:action when condition is false

// 13 > 12 ? console.log("fine") : console.log("not fine");

// let age = 11;

// age >= 18 ? console.log("eliigble") : console.log("not eligible");

// Use the BMI example from Challenge  and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// if (BMIJohn > BMIMark) {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
// } else {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// }
// 
// let mark = prompt("student marks");

// if (mark >= 60 && mark <= 100) {
//     console.log("first");
// } else if (mark < 60 && mark >= 45) {
//     console.log("second");
// } else if (mark >= 33 && mark < 45) {
//     console.log("third");
// } else if (mark >= 0 && mark < 33) {
//     console.log("fail");
// } else {
//     console.log("provide valid marks");
// }

// mark >= 60 && mark <= 100//if condition
//     ? console.log("first")//if action
//     : mark < 60 && mark >= 45//else if con
//     ? console.log("second")
//     : mark >= 33 && mark < 45
//     ? console.log("third")
//     : mark >= 0 && mark < 33
//     ? console.log("fail")
//     : console.log("provide valid marks");

// ConstBMIMark>ConstBMIJohn‽ console.log("Mark's BMI  is higher than John's! "):console.log("John'sBMI is higher than Mark's")

// let a = 15;
// let b = 15;

// if (a > b) {
//     console.log("fine");
// } else if (a < b) {
//     console.log("not fine");
// } else {
//     console.log("equal");
// }

// a > b
//     ? console.log("fine")
//     : a < b
//     ? console.log("not fine")
//     : console.log("equal");


    // nullish coaellicing operator//


    // || operator

    // 4>5||5>3

    // null??'shivam'

    // let name;
    // console.log(''??name??false??'bhagwan')


    // switch case



//     switch(expression){
// case name:


//     }

// let age =12


// switch(age>18){

// case true:console.log('eligible')
// break;
// default:console.log('not eligible')

// }


// let mark=65


// switch(true){
// case mark>=60&&mark<=100:console.log('first')
//     case mark>=45 &&mark<60:console.log('second')
// break
//     case mark>=33&&mark<45:console.log('third')

//     case mark>=0&&mark<33:console.log('fail')

//     default:console.log('not a valid marks')
// }


// let buyingCost=1200


// switch(true){

//     case buyingCost>=1000:console.log('5% discound')
//     break;
//     default:console.log('no discount')

// }


// loop


// loop
// for loop

// for(initialization,condition,updation){
//     block of code
// }


// for(let i=1;i<=10;i++){
//     alert(`hello javascript ${i}`)
// }

// while(condtion){
// block of code
// }
// let i=1

// while(i<=10){
//     console.log(`hello guys ${i}`)
// i++
// }

// do while/

// do{
//     block of code
// }
// while()



// let i=1
// do{
//     console.log('hello javascrip'+i)
//     i++
// }
// while(i<=0)


// while(i<=0){
//     console.log('hello javascrip'+i)
//     i++
// }


// let array=[1,2,3,4,5,6,7,8,9]//9
// console.log(array[0])
// console.log(array[1])
// for(let i=0 ;i<array.length;i++){
//     console.log(array[i])
// }
// let i=0
// while(i<array.length){
//     console.log(array[i])
//     i++
// }

// do{
//     console.log(array[i])
//  i++
// }
// while(i<array.length)












// loop










