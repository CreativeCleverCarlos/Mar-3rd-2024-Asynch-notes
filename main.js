

//Asynchronous Code - functions that run in the background while the rest of the code is executed

//a callback is a function that is invoked inside the outer function to complete some kind of routine or task

//for example

main.addEventListener("click", function(){ 
    //something happens :)
})

//the addEventListener() takes a callback (the "something happens :)", and then calls it when the main gets clicked 

//relying on souly collapse can have you enter a "callback hell" where one is dependant on another, which is dependant upon another and so on and so forth


//Promises now, are how to get around relying to much on callbacks

//A promise is essentially an object that might produce a value at some point in the future

//for example
const getData =  function(){
    //go fetch data from some API
    
    //clean it up a bit so it looks neat, and return it as an object

    return data
}

/**
    https://davidwalsh.name/promises
**/

//