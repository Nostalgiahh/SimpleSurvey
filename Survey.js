//global variables

let score = 0;

const Outcome1 = "you are doing great, keep it up!";

const Outcome2 = "here, have a hug";
      
const Outcome3 = "ksy";




//removes stuff

function remove(el) {
    var element = el;
    element.remove();
}

//intro

    document.getElementById("begin").addEventListener("click", function () {
        let pass = document.getElementById("opt 1");
        let fuckoff = document.getElementById("begin");
    
        fuckoff.style.display = "none";
        pass.style.display = "block";

    });

//First questionare
    
        document.getElementById("10pt").addEventListener("click", function() {

            let finish1 = document.getElementById("opt 1");
            finish1.style.display = "none";
         

            let next1 = document.getElementById("opt2");
            next1.style.display = "block";

            score = score + 10;
        });


        document.getElementById("20pt").addEventListener("click", function() {

            let finish1 = document.getElementById("opt 1");
            finish1.style.display = "none";
         

            let next1 = document.getElementById("opt2");
            next1.style.display = "block";

            score = score + 20;
        });


        document.getElementById("30pt").addEventListener("click", function() {

            let finish1 = document.getElementById("opt 1");
            finish1.style.display = "none";
         

            let next1 = document.getElementById("opt2");
            next1.style.display = "block";

            score = score + 30;
        });




        

//second questionare

 document.getElementById("10pt2").addEventListener("click", function() {

    let finish2 = document.getElementById("opt2")
    finish2.style.display = "none";


    let next2 = document.getElementById("opt3");
     next2.style.display = "block";

     score = score + 10;

 });

 document.getElementById("20pt2").addEventListener("click", function() {

    let finish2 = document.getElementById("opt2")
    finish2.style.display = "none";


    let next2 = document.getElementById("opt3");
     next2.style.display = "block";

     score = score + 20;

 });

 document.getElementById("30pt2").addEventListener("click", function() {

    let finish2 = document.getElementById("opt2")
    finish2.style.display = "none";


    let next2 = document.getElementById("opt3");
     next2.style.display = "block";

     score = score + 30;

 });

//Third questionare and final result

        document.getElementById("10pt3").addEventListener("click", function() {

           let finish3 = document.getElementById("opt3");
           finish3.style.display = "none";


          let next3 = document.getElementById("result");
           next3.style.display = "block";

          score = score + 10;
            

            if (score <= 40) {
                document.getElementById("result").innerHTML = Outcome1;
           }    else if (score <= 70) {
                document.querySelector("result").innerHTML = Outcome2;
           }    else if (score >= 70) {
              document.querySelector("result").innerHTML = Outcome3;
           };

        });

        document.getElementById("20pt3").addEventListener("click", function() {

            let finish3 = document.getElementById("opt3");
            finish3.style.display = "none";
 
 
           let next3 = document.getElementById("result");
            next3.style.display = "block";
 
           score = score + 20;
             
 
             if (score <= 40) {
                 document.getElementById("result").innerHTML = Outcome1;
            }    else if (score <= 70) {
                 document.querySelector("result").innerHTML = Outcome2;
            }    else if (score > 70) {
               document.querySelector("result").innerHTML = Outcome3;
            };
 
         });

         document.getElementById("30pt3").addEventListener("click", function() {

            let finish3 = document.getElementById("opt3");
            finish3.style.display = "none";
 
 
           let next3 = document.getElementById("result");
            next3.style.display = "block";
 
           score = score + 30;
             
 
             if (score <= 40) {
                 document.getElementById("result").innerHTML = Outcome1;
            }    else if (score <= 70) {
                 document.querySelector("result").innerHTML = Outcome2;
            }    else if (score > 70) {
               document.querySelector("result").innerHTML = Outcome3;
            };
 
         });

       