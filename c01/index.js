console.log('Zdravo svetu');

console.error('Грешка');

let object = {ime:'Pero', prezime:'Perovski'}
console.dir('object');

let tbl = [
    {ime:'Pero', prezime:'Perovski'},
    {ime:'Pero', prezime:'Perovski'},
    {ime:'Pero', prezime:'Perovski'},
    {ime:'Pero', prezime:'Perovski'},
];
console.table(tbl);
console.timeEnd('Pero');

console.log("Zdravo");
console.log('Zdravo');
console.log(`Zdravo`);

let ime = 'Stefan'; //prost tip - pass by value
let godini = 23;   //prost tip - pass by value
let student=true;   //prost tip - pass by value
let lokacija = {grad:'Skopje', drzava:'Makedonija'}; //slozen tip -pass by reference

function change(ime, godini, student, lokacija){
    a='Vanco';
    b=40;
    c=false;
    lokacija.grad='Bitola';
}

change(ime, godini, student, lokacija);

console.log(ime);
console.log(godini);
console.log(student);
console.log(lokacija);

function sampleFn(param1){
    console.log('Funkcija 1');
}

const sampleFn2 = function(){
    console.log('Funkcija 2');
}

const sampleFn = () =>{
    console.log('Funkcija 3!');
}

const Dog = (type) => {
    this.type = type;
}
const pitbull = new Dog('pitbull');
console.log('pitbull');

//What is the difference between fat arrow and clasic javascript functions