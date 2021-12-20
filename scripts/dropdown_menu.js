var dropdown = document.querySelector(".mobile_dropdown");
var button = document.getElementById("menu_bars");

function menu() {
    if (dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    } else {
            dropdown.style.display = "grid";
            button.innerHTML = "close";
        }
}

window.addEventListener("resize", function() {
    if (document.documentElement.clientWidth > 700) {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    }
})

function showInfo (x) {

    var boxtitle = document.getElementsByClassName(x)[0];
    var boxcontent = document.getElementsByClassName(x)[0];
    var allcontent = document.getElementsByClassName('content');


    for (var i = 0; i < allcontent.length; i++) {

        if ( allcontent.item(i).style.display === "block") {
            allcontent.item(i).style.display = "";
        }
        
    }

    if ( boxcontent.style.display === "") { 
            boxcontent.style.display = "block";
        } else {
            boxcontent.style.display = "";
        }

    }