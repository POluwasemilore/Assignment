//Timers Module
//Timers modules are used to set and execute functions at different set time and intervals. 

var myInt = setImmediate(function () {
    console.log("Next message in 5 seconds");
},);


var myInt2 = setTimeout(function () {     //the function would execute after 5 seconds.
    console.log("5 seconds has ellasped");
}, 5000);