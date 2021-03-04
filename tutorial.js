const sum = (num1, num2)=>{
    return num1+num2;
};
//Now a question arise, what if we have to send many such modules
const PI= 3.14;
class SomeMathObject{
    constructor(msg) {
         console.log('object created');
        
    }
}


//expose this function to the outer worls that I have now created it
// module.exports.sum = sum;
// one way to create multiple exports
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;
//        OR
module.exports = {
    sum:sum,
    PI:PI,
    SomeMathObject:SomeMathObject
}