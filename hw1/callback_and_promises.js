//******************************/
//        CALLBACK            //
//****************************/

const result = (output) => {
    console.log(output);
}

const showWeight = (weight, conversWeight, output) => {
 
    switch(conversWeight){
        case 'kg':
            output = weight * 2.20462;
            result(output);
            break;
        case 'pound':
            output = weight / 2.20462;
            result(output);
            break;
    }
}

showWeight(52, 'kg', result);


const showHeight = (height, conversHeight, output) =>{
    switch(conversHeight){
        case 'cm':
            output = height * 0.393701;
            result(output);
            break;
        case 'inch':
            output = height / 0.393701;
            result(output);
            break;
    }
}
showHeight(160, 'cm', result);

//**********************************/
//          PROMISES               /
//********************************/
const parniBroevi = (param1,param2) => {
    return new Promise((success,fail) =>{
        if(param1 % 2==0 && param2 % 2 == 0){
            return success(param1 * param2);
        }else{
            return fail('Vnesovte neparen broj!')
        }
    });
}
parniBroevi(8,2)
.then(i => {
    console.log(i);
})
.catch(err => {
    console.log(err);
})


const ednakviBroevi = (num1,num2) => {
    return new Promise((success,fail) => {
        if(num1 === num2){
            return success(num1 / num2);
        }else{
            fail('Vnesovte dva razlicni broja!');
        }
    })
}
ednakviBroevi(3,3)
.then(x => {
    console.log(x);
})
.catch(err => {
    console.log(err);
})
