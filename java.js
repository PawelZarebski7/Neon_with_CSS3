var button = document.querySelector("button");
button.addEventListener("click", function(){
    if (this.textContent == "Włącz") {
        this.textContent = "Wyłącz";
    }
    else {this.textContent = "Włącz";}

    const letter = document.querySelectorAll("li");
    for (var i = 0; letter.length > i; i++ ) {
        letter[i].classList.toggle("off");
    }
})