var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "God morgen";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "God aften";
} else {
    elSaludo = "Godnat";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(212, 230, 241);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Du er inde index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#3498DB");
}
function pagina() {
    createSpan(". Du er inde page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#CD6155");
}
