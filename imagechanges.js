// FOR LOGIN PICTURE
//displayLarger is called onmouseover
//To change the height and width of the correct image it must be identified.  This is done by passing the parameter "this".


//FOR BACKGROUND IMAGE
function displayHoverBackground(){
        document.getElementById("index_main_photo").src = "index_home2.png";
        document.getElementById("current").style.color = "white";
        document.getElementById("index_main_photo").style.opacity = "95%";
        document.getElementById("logo").src = "logo2.jpg";
        document.getElementById("nav").style.backgroundColor = "#ac3a39";
        document.getElementById("none1").style.color = "black";
        document.getElementById("none2").style.color = "black";
        document.getElementById("none3").style.color = "black";
        document.getElementById("index_main_text").style.color = "white";

      }

function displayNormalBackground(){
        document.getElementById("index_main_photo").src = "index_home.jpg";
        document.getElementById("current").style.color = "black";
        document.getElementById("index_main_photo").style.opacity = "95%";
        document.getElementById("logo").src = "logo.jpeg";
        document.getElementById("nav").style.backgroundColor = "#53c5c6";
        document.getElementById("none1").style.color = "white";
        document.getElementById("none2").style.color = "white";
        document.getElementById("none3").style.color = "white";
        document.getElementById("index_main_text").style.color = "black";
    }
