let namnKomplett = "";


function fullName() {
  var fullName = firstName.value + ' ' + lastName.value;
  document.getElementById('info').innerHTML = 'Hej på dig ' + fullName;
}

// FUNCTION
function enterPress (enter) {
  let namn = firstName.value;
  let efternamn = lastName.value;
  let key = enter.keyCode;
  try {
    if (key == 13 && namn + efternamn == "") throw "Du har inte fyllt i något!";
    if (key == 13 && namn == "") throw "Du har inte fyllt i din förnamn!";
    if (key == 13 && efternamn == "") throw "Du har inte fyllt i din efternamn!";
  }
  catch (error) {
    alert("Nu vart det tokigt här!\n" + error);
  }
  if (key == 13 && namn !== "" && efternamn !== "") {
    fullName();
    namnKomplett = namn + efternamn;
    loop();
    document.getElementById("addInfo").setAttribute("style", "display: none");
  }
}



let namn2 = document.getElementById("firstName");
let efternamn2 = document.getElementById("lastName");


let okBtn = document.getElementById("okBtn");
okBtn.addEventListener("click", function(){
  if (namn2.value !== "" && efternamn2.value !== "") {
    fullName();
    namnKomplett = namn2.value + efternamn2.value;
    loop();
    document.getElementById("addInfo").style.display = "none";
  }
  else {
    try {
      if (namn2.value + efternamn2.value == "") throw "Du har inte fyllt i något!";
      if (namn2.value == "") throw "Du har inte fyllt i din förnamn!";
      if (efternamn2.value == "") throw "Du har inte fyllt i din efternamn!";
    }
    catch (error) {
      alert("Nu vart det tokigt här!\n" + error);
    }
  }
})

function loop() {
  for (let i = 1; i < namnKomplett.length + 1; i++) {
    document.getElementById("info2").innerHTML = "Visste du att ditt namn innehåller " + i + " bokstäver!";
  }
  document.getElementById("resetBtn").style.display = "inline-block";
  let resetAll = document.getElementById("resetBtn");
  resetAll.addEventListener("click", function() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("addInfo").style.display = "block";
    document.getElementById("info").innerHTML = "";
    document.getElementById("info2").innerHTML = "";
    document.getElementById("resetBtn").style.display = "none";
  })
}

/*
function btnClick () {
  let namn = firstName.value;
  let efternamn = lastName.value;
  try {
    if (namn + efternamn == "") throw "Du har inte fyllt i något!";
    if (namn == "") throw "Du har inte fyllt i din förnamn!";
    if (efternamn == "") throw "Du har inte fyllt i din efternamn!";
  }
  catch (error) {
    alert("Nu vart det tokigt här!\n" + error);
  }
  if (namn !== "" && efternamn !== "") {
    fullName();
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("addInfo").style.display = "none";
  }
}
*/