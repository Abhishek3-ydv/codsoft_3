const show=document.getElementById("show");
function appendToDiplay(input){
    show.value+=input;
}
function clearDisplay(){
    show.value="";
}
function calculate(){
  try{
       show.value=eval(show.value);
  }
  catch{
    show.value="Error";
  }
 
}
