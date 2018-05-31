var logo = document.getElementsByTagName("img")[0];

logo.onmouseover = function () {
  this.src="Logo_De-Kelder-yellow.png";
}
logo.onmouseout = function () {
  this.src="Logo_De-Kelder 2.png";
}
logo.onmouseclick = function () {
  this.href="OPhome.html";
}
var slider = document.getElementById("slidefoto");
var slidertekst = document.getElementById("slidertekst");
console.log(slider.length)
var teller = 0;
var slide = ["Mock-Ups-alternatief.png", "Mock-Ups-fotografisch.png", "hoes_typografisch_finished!.jpg", "1718_OP2_Mockup_Voorkant_02.jpg"];
var slidetekst = ["Imse G","King Z","Vexed","Relics" ]
console.log(slide.length)

var FunctieTijd = function () {
  slidertekst.innerHTML = slidetekst[teller]
  slider.src = slide[teller];
  teller++;
  if (teller === 4) {
    teller = 0
  }
}
setInterval(FunctieTijd, 2500);

var contactknop = document.getElementById("contact");
console.log(contact.innerHTML);

contactknop.onclick = function() {
  console.log("klik");
  window.scrollTo(0,-800)
}
var navcontact = document.getElementById("navcontact");

navcontact.onclick = function () {
  console.log(linkkk)
  alert("tel: +32 499 29 15 48 of Dekelder@info.be")
}
