

function valider()
{var texe="la note de cette pv est "
  var note =0;
  var x =document.getElementsByName("compteur")[0].checked;
  var x1 =document.getElementsByName("compteur")[1].checked;
  var y =document.getElementsByName("visiblté")[0].checked;
  var y1 =document.getElementsByName("visiblté")[1].checked;
  var y2 =document.getElementsByName("visiblté")[2].checked;
  var y3 =document.getElementsByName("visiblté")[3].checked;
  var con = $("#Concurrence").val();
  var contrat = $("#contrat").val();
  var lm = $("#loyer").val();
  var sur = $("#surface").val();
    
       if (x== true && x1 == false)
       {
        note =5;
    }
     else if (   x1== true && x == false )
     {
        note =5;
    }
     else if (  x == true && x1 == true ) 
     {
        note =10;
    }
    if (y== true && y1 == false && y2 == false && y3 == false)
    {
     note =note -1;
 }
  else if (y== false && y1 == true && y2 == false && y3 == false)
  {
   note =note -1;
}
else if (y== false && y1 == false && y2 == true && y3 == false)
  {
   note =note -1;
}
else if (y== false && y1 == false && y2 == false && y3 == true)
  {
   note =note -1;
}
else if (y== true && y1 == false && y2 == false && y3 == true)
  {
   note =note -2;
}
else if (y== true && y1 == false && y2 == true && y3 == false)
  {
   note =note -2;
}
else if (y== true && y1 == true && y2 == false && y3 == false)
  {
   note =note -2;
}
else if (y== false && y1 == true && y2 == false && y3 == true)
  {
   note =note -2;
}
else if (y== false && y1 == true && y2 == true && y3 == false)
  {
   note =note -2;
}
else if (y== false && y1 == false && y2 == true && y3 == true)
  {
   note =note -2;
}
else if (y== true && y1 == true && y2 == true && y3 == false)
  {
   note =note -3;
}
else if (y== true && y1 == true && y2 == false && y3 == true)
  {
   note =note -3;
}
else if (y== true && y1 == false && y2 == true && y3 == true)
  {
   note =note -3;
}
else if (y== false && y1 == true && y2 == true && y3 == true)
  {
   note =note -3;
}
else if (y== true && y1 == true && y2 == true && y3 == true)
  {
   note =note -4;
}
if (note>=5)
{
  
return open("tyc.html");
}
else
{
  alert ("la note est inferieur au bareme "+ note);
}

}