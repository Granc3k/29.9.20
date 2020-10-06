function Cum() {
  let jm = document.getElementById("jmeno").value;
  console.log(jm);
  //alert("Zdar " + jm + "e :0");
}



function count() {
  let num1 = document.getElementById("num1").valueAsNumber;
  let num2 = document.getElementById("num2").valueAsNumber;
  let op = document.getElementById("operace").value;
  
  let num = "?";
  if (isNaN(num1)) {
    alert("Není zadáno první číslo!");
  } 
  else if (isNaN(num2)) {
    alert("Není zadáno druhé číslo!");
  } 
  else if (op == "plus") {
    num = num1 + num2;
  } 
  else if (op == "minus") {
    num = num1 - num2;
  }  
  else if (op == "soucin") {
    num = num1 * num2;
  }  
  else if (op == "deleni") {
    if (num2 == 0){
      alert("Číslo nemůže být děleno 0 !! Pepege Clap")
    }
    num = num1 / num2;
  }


  document.getElementById("num").value = num;
  document.getElementById("vysledek2").innerHTML = "Výsledek je <b>" + num + "</b>."; 
  //alert(num);
}
