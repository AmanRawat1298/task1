

function myFunction() {
    var x = document.getElementById("aman");
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
  }
  function myFunction2() {
    var x = document.getElementById("inprogress");
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
  }
  function myFunction3() {
    var x = document.getElementById("completed");
    console.log("VIEW ON ")
    console.log(x.className);
    if (x.className == "cards") {
      x.className += "-responsive";
      console.log(x.className);
    } else {
      x.className = "cards";
    }
  }