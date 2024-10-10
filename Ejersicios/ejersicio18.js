const array = [ -2, 3, 5, -15 ];

function paraAbsolutos(array){
    return array.map(n => Math.abs(n) )
};

const aobsolutos = paraAbsolutos(array); 

console.log(aobsolutos);