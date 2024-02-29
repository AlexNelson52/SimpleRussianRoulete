`use strict`;
let chamber = ["Nothing", "Nothing", "Nothing", "Nothing", "Nothing", "Bullet"];

function gun(survivalOrDeath){
  var colore = document.getElementById("flash-red").value;
  
  for (let i = 0; i <= chamber.length; i++){
    let shooting = chamber[Math.floor(Math.random() * chamber.length)];
    if (shooting === "Nothing"){
      document.body.style.backgroundColor = "black";
      return alert("Nothing Happens.")} 
      else { 
        document.body.style.backgroundColor = "red";
        return alert("Oh dear you are dead!")
    }
  }
}

gun()

