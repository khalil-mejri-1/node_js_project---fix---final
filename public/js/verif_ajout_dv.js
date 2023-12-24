


 
 
function validateSelection() {

  var branche =document.getElementById("branche").value;
  var semester =document.getElementById("semester").value;
  var matiere =document.getElementById("matiere").value;
  var ds_examin =document.getElementById("ds_examin").value;
  var anner =document.getElementById("anner").value;
  var link_telecharger =document.getElementById("link_telecharger").value;

  var branche = document.getElementById("branche").value;
  var errorMessage = document.getElementById("error");

  if ((branche === "0")||(semester === "0")||(matiere === "0")||(ds_examin === "0")||(anner === "0")||(link_telecharger==="")) {
      errorMessage.textContent = " Complétez les informations";
      return false;
  
  } else {
      errorMessage.textContent = ""; 
    
  }





}