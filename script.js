var green = document.getElementById("green");
var red = document.getElementById("red");
var spiny = document.getElementById("spiny");

var selected = null;

green.addEventListener("click", select);
red.addEventListener("click", select);
spiny.addEventListener("click", select);

function select() {
    if (!selected) {
        this.classList.add("selected");
        selected = this;
    }
    else {
        var temp = selected.getAttribute("src");
        selected.setAttribute("src", this.getAttribute("src"));
        this.setAttribute("src", temp);

        selected.classList.remove("selected");
        selected = null;
    }
}
