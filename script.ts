import * as data from './data.json'



function myFunction() : void {
    const x = document.getElementById("aman") as HTMLElement;
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
}


function myFunction2() : void {
    const x = document.getElementById("inprogress") as HTMLElement;
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
}

function myFunction3() : void {
    const x = document.getElementById("completed") as HTMLElement;
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
}


