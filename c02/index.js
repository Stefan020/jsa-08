const cb = () => {
    console.log('timed out!');
}

cb();

setTimeout(cb, 5000);

setTimeout(() => {
  console.log('timed out!');
}, 5000);

console.log('***');

const rezultat = (calc, a, b) => {
    console.log('Rezultatot e:', calc(a, b));
};
rezultat((c, d) => {
    return c * d;
}, 4, 3);


// const temp(42, 'c2f', (output) => {
//     console.log('Tekovnata temperratura e', output, 'stepeni');
// });
 const result = (output) => {
     console.log(output);
 }
const showTemperature = (degrees, conversMethod,result) => {
   if(conversMethod == 'c2f'){
       let output = degrees *(9/5) + 32;
       result(output);
   }else if(conversMethod == 'f2c'){
       let output = (degrees -32)*5/9;
       result(output);
   }
}

showTemperature(42, 'c2f', result);

//mesto if else loop moze so switch case!
// let output = 0;
// switch(conversMethod){
//     case 'c2f':
//         output = degrees *(9/5) + 32;
//        result(output);
//        break;
//        case 'f2c':
//         output = (degrees -32)*5/9;
//         result(output);
//         break;
// }
// temp(42, 'c2f', result)

const funWithPromise = (param) => {
    return new Promise((success, fail)=>{
        //ako operacijata e uspesna
        // return success();
        // //ako ne e uspesna
        // return fail();
        if(param == true){
            return success('SUCCESS!!!');
        }else{
            return fail(':(');
        }
    });   //promise e klasa i kako parametar prima anonimna f-cija so dva parametri
}
funWithPromise(true)
     .then(o =>{
         console.log(o);
     })
     .catch(err =>{
         console.log(err);
     })



const sobiranje = (param1,param2) => {
    return new Promise((success,fail) => {
        if(param1 > 0 && param2 > 0 ){
            return success(param1 + param2);
        }else{
            return fail('nedozvoleno sobiranje!');
        }
    });
}
sobiranje(2, -2)
  .then(r => {
      console.log(r);
  })
  .catch(err => {
      console.log(err);
  });