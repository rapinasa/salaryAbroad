
function MoneyConverter() {
var hh = document.getElementById("hh").value;
var ha = document.getElementById("ha").value;
var y = document.getElementById("salaryHome").value;
var x = document.getElementById("salaryAbroad").value;
var e = document.getElementById("yearsAbroad").value;
var z = document.getElementById("Spending").value;


if  
    (!Number(x) || !Number(y) || !Number(e) || !Number(z) ){
        alert("Could you fill the form");
    }
else if
    (Number(x) < Number(y)){
    alert("Have no sense, You can get more money at home");
}
else {
  document.getElementById("Comparison").innerHTML= (x/y).toFixed(3);
  document.getElementById("Grivny").innerHTML=(x-y).toFixed(3);
    document.getElementById("Dollars").innerHTML= ((x-y)/28).toFixed(3);
    document.getElementById("DollarsAbroad").innerHTML=(((x-y)/28)-z/28).toFixed(3);
  document.getElementById("CountYears").innerHTML=((((x-y)/28)-z/28)*12*e).toFixed(3);
   document.getElementById("HourHome").innerHTML=(y/hh).toFixed(3);
   document.getElementById("HourAbroad").innerHTML=(x/ha).toFixed(3);
    document.getElementById("HourDifferencies").innerHTML=((x/ha)/(y/hh)).toFixed(3);
    document.getElementById("HourDifferencies2").innerHTML=(((x/ha)*hh)-z).toFixed(3);
}
}
