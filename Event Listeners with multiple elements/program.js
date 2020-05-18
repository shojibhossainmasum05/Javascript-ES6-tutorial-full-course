
for (i = 0; i < 3; i++) {

    document.querySelectorAll(".my-button")[i].addEventListener("click", function () {
        var text = this.innerHTML = "Are you going to be fatal?";
        document.querySelector("#hading").innerHTML= text ; 
    });
    
}