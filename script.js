
function myFunction() {
  var branche =document.getElementById("branche").value;
  var semester =document.getElementById("semester").value;
  var matiere =document.getElementById("matiere").value;


if ((branche==0)|| (semester==0)|| (matiere==0)) {
  alert("aaaa");
  return false
  
}

  else if((branche==1)&&(semester==1)&&(matiere==2)){
    go_to=("analyse_1_2010");

  }
  else if((branche==1)&&(semester==2)&&(matiere==2)){
    go_to=("analyse_2_2010");

  }
  else if(branche==3){
    go_to=("analyse_3");

  }

  else if(branche==4){
    go_to=("analyse_4");

  }

  else{
    go_to=("analyse_5");

  }

 
    const element = document.getElementById(go_to);
    element.scrollIntoView({behavior:"smooth",block:"start"});
  }
  