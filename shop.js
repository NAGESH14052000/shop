
var us = "venky"
var password="6300"
 
 function user()
 {
    var name=document.getElementById("userid").value
     var pass=document.getElementById("passw").value
     if (name==us && pass==password)
      {
       
          document.getElementById("good").setAttribute("action","shooping.html")
         document.getElementById("submit").setAttribute("type","submit")    
            
      }
     if(name!=us&&pass==password)
    {
        document.getElementById("userid").style.borderColor="red"
    
    }
    else if(name==us&pass!=password)
    {
        
        document.getElementById("passw").style.borderColor="red"
  
    }
    else
    {
        document.getElementById("userid").style.borderColor="red"
        document.getElementById("passw").style.borderColor="red"
       
    }
}
// var name=document.getElementById("userid").value
//     var pass=document.getElementById("passw").value
// function notfun()
// {
    
//     if (name==us && pass==password)
//     {
       
//         document.getElementById("good").setAttribute("action","shooping.html")
//         document.getElementById("submit").setAttribute("type","submit")  
      
//         confirm()
//         function fun()
//         {
//          var hh= confirm("Do you want login");     
//              if(hh==true)
//              {
//                  window.open("shooping.html");
//                  return true;
//              }
//              else{
//                 window.open("index.html");
//                 return false;
//              }
//         }
       
            
//      }
   
// }
