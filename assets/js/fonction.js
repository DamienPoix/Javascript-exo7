function getNumber(){
//description des variables
var shoeSize = document.getElementById('shoeSize').value;
var yearOfBirth = document.getElementById('yearOfBirth').value;
//description du calcule
var result =
(shoeSize * 2 + 5)
 * 50
 - yearOfBirth
 + 1766 ;
 //description du regex
 var regex = /[0-9]/
 if ((regex.test(shoeSize) == true) && (regex.test(yearOfBirth) == true) ){
alert(result);
}else{
  alert('ATTENTION')
}
}
