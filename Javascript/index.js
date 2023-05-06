// function click(){
//   var x = document.getElementById("peep").value;
//   alert(x);
//   // var y = document.getElementById("bill").value;
//   // var z = document.getElementById("tip").value;
  
// }


//         function click(){
//         var x = document.getElementById("peep").value;
//         var y = document.getElementById("bill").value;
//         var z = document.getElementById("tip").value;
 
        // var z = (x*y)+z;
        // document.getElementsByTagName("h3").innerhtml=z;


//   // var y = document.getElementById("bill").value;
//   // var z = document.getElementById("tip").value;
  
        //  }


        document.getElementById("btn").addEventListener("click", function() {
          var x = document.getElementById("peep").value;
          var y = document.getElementById("bill").value;
          var z = document.getElementById("tip").value;
  
          var p = ((z/100)*y)/x;

          //  document.getElementsById("result").innerHTML;
          // var a = document.getElementsByClassName("resu").innerHTML;
          var a = document.querySelector('.resu');
          a.innerText=p;
  
  
          // a = z;
          // console.log(a);
        
  });