
function myFunction() {
  var branche =document.getElementById("branche").value;
  var anner =document.getElementById("anner").value;

if ((branche==0)||(anner==0)) {

    document.getElementById("error").innerHTML = "Complétez les informations  !!!";
    return false;
}

  else if((branche=="sc info")&&(anner==2023)){
    document.getElementById("error").innerHTML = "";
    go_to=("lfsi_2023");
   

  }
  else if((branche=="sc info")&&(anner==2022)){
    document.getElementById("error").innerHTML = "";
    go_to=("lfsi_2022");

  }
 

  else if((branche=="sc info")&&(anner==2021)){
    document.getElementById("error").innerHTML = "";
    go_to=("lfsi_2021");
   

  }
  else if((branche=="sc info")&&(anner==2020)){
    document.getElementById("error").innerHTML = "";
    go_to=("lfsi_2020");
   

  }

  else if((branche=="sc info")&&(anner==2019)){
    go_to=("lfsi_2019");

  }
 

  else if((branche=="sc info")&&(anner==2018)){
    go_to=("lfsi_2018");
   

  }
  else if((branche=="sc info")&&(anner==2017)){
    go_to=("lfsi_2017");

  }
 





  else{
    go_to=("");

  }

 
    const element = document.getElementById(go_to);
    element.scrollIntoView({behavior:"smooth",block:"start"});
  }
  