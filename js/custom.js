//var name=prompt("Enter your favourite color");
//alert(name " is a color for bright");
//var Age=prompt("How Old are you?");
//if(age<18){
//    alert("PLEASE look for a cartoon network site")
//}
 function validateEmail() {
2   var eEntered = document.getElementById("address").value;
3   var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
4   if (!(eEntered.match(emailCorrectPattern))) {
     alert("Please correct email address");
     return false;    }
 } 