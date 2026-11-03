//Criando variavel star
let star = document.createElement("div");

xy = [20,20];

//Adicionando atributos na tag div
star.className = "star";
star.style.top = xy[0] + "px";
star.style.left = xy[1] + "px";

//inserindo no documento
document.body.append(star);